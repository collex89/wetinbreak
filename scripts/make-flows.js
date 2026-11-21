// Builds one set of Kane flows per language from flows/templates/.
//
//   npm run flows:make
//
// For each language it reads src/locales/<code>.json, replaces every {{key}}
// in the templates with that language's text (falling back to English when a
// key is missing, the same way the app does), and writes
// flows/<code>/<flow>_test.md with the url pointing at ?lang=<code>.

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
    text = text.replace(/^url:.*$/m, `url: http://localhost:5173/?lang=${code}`)

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
