// Builds one set of Kane flows per language from flows/templates/.
//
//   npm run flows:make
//
// For each language it reads src/locales/<code>.json, replaces every {{key}}
// in the templates with that language's text (falling back to English when a
// key is missing, the same way the app does), and writes
// flows/<code>/<flow>_test.md with the url pointing at ?lang=<code>&slow=1
// (slow=1 is a test hook that keeps "Processing..." on screen for 20 seconds).

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const templatesDir = join(root, 'flows', 'templates')
const localesDir = join(root, 'src', 'locales')

const LANGUAGES = {
  en: 'English',
  pcm: 'Nigerian Pidgin',
  yo: 'Yoruba',
  ig: 'Igbo',
  ha: 'Hausa',
}

// General yes/no language check. Only for languages with little English overlap:
// Nigerian Pidgin is English-based, and English itself has nothing to check.
const LANGUAGE_CHECK_FOR = new Set(['yo', 'ig', 'ha'])
const LANGUAGE_CHECK =
  "Verify there is no English text on screen except the brand 'WetinBreak Pay', network names, electricity company names and numbers. " +
  "The person's name 'Ada Obi' and the language names in the language picker are also allowed."

const readJson = (file) => JSON.parse(readFileSync(file, 'utf8'))
const english = readJson(join(localesDir, 'en.json'))
const templates = readdirSync(templatesDir).filter((f) => f.endsWith('_test.md'))

for (const [code, languageName] of Object.entries(LANGUAGES)) {
  const strings = readJson(join(localesDir, `${code}.json`))
  const outDir = join(root, 'flows', code)
  mkdirSync(outDir, { recursive: true })
  const fallbacks = new Set()

  for (const file of templates) {
    let text = readFileSync(join(templatesDir, file), 'utf8')

    // Point the frontmatter url at this language.
    text = text.replace(/^url:.*$/m, `url: http://localhost:5173/?lang=${code}&slow=1`)

    // The {{language_check}} line becomes the check, or disappears entirely.
    const check = LANGUAGE_CHECK_FOR.has(code) ? `${LANGUAGE_CHECK}\n` : ''
    text = text.replace(/^\{\{language_check\}\}\r?\n/gm, check)

    // One pass only: translated text is never re-scanned for {{...}}.
    text = text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      if (key === 'language_name') return languageName
      if (key in strings) return strings[key]
      if (key in english) {
        fallbacks.add(key)
        return english[key]
      }
      throw new Error(`${file}: unknown key {{${key}}} (not in en.json)`)
    })

    writeFileSync(join(outDir, file), text)
  }

  const note = fallbacks.size ? ` (English fallback for: ${[...fallbacks].join(', ')})` : ''
  console.log(`${code}: wrote ${templates.length} flows to flows/${code}/${note}`)
}
