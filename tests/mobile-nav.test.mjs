import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

import { compileScript, compileTemplate, parse } from '@vue/compiler-sfc'

const filename = 'layouts/default.vue'
const source = readFileSync(filename, 'utf8')
const { descriptor, errors } = parse(source, { filename })

test('mobile navigation closes when a mobile menu link is clicked', () => {
  assert.deepEqual(errors, [])

  const script = compileScript(descriptor, { id: 'mobile-nav-test' })
  const template = compileTemplate({
    id: 'mobile-nav-test',
    filename,
    source: descriptor.template.content,
  })

  assert.deepEqual(template.errors, [])
  assert.match(source, /ref="mobileMenuDetails"/)
  assert.match(source, /@click="closeMobileMenu"/)
  assert.match(script.content, /const closeMobileMenu =/)
  assert.match(script.content, /details\.open = false/)
  assert.match(script.content, /showMobileMenu\.value = false/)
})

test('mobile menu summary exposes the open state to assistive technologies', () => {
  assert.deepEqual(errors, [])
  assert.match(source, /:aria-expanded="showMobileMenu \? 'true' : 'false'"/)
})
