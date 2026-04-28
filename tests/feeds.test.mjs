import assert from 'node:assert/strict'
import test from 'node:test'

import { readGeneratedText, siteUrl } from './helpers/generated-site.mjs'

function assertValidDate(value, label) {
  const timestamp = Date.parse(value)
  assert.ok(!Number.isNaN(timestamp), `Invalid date for ${label}: ${value}`)
}

function articleUrlsFrom(text) {
  return Array.from(
    text.matchAll(/https:\/\/beabot\.fr\/eco-conception\/[^<"',\s]+/g),
    (match) => match[0]
  )
}

test('rss.xml exposes a non-empty RSS feed with stable article URLs', (t) => {
  const rss = readGeneratedText(t, 'rss.xml')

  assert.ok(rss.trim().length > 0)
  assert.match(rss, /<rss\b/)
  assert.match(rss, /<channel>/)
  assert.match(rss, /<item>/)
  assert.doesNotMatch(rss, /\[object Object\]/)

  const articleUrls = articleUrlsFrom(rss)
  assert.ok(articleUrls.length > 0, 'Expected article URLs in RSS')

  for (const url of articleUrls) {
    assert.ok(url.endsWith('/'), `Article URL should keep trailing slash: ${url}`)
  }

  const dates = Array.from(rss.matchAll(/<pubDate>([^<]+)<\/pubDate>/g), (match) => match[1])
  assert.ok(dates.length > 0, 'Expected pubDate entries in RSS')
  dates.forEach((date, index) => assertValidDate(date, `rss item ${index}`))

  assert.match(rss, /&apos;|&amp;|&quot;/)
  assert.equal(rss.includes(`${siteUrl}/rss.xml`), true)
})

test('feed.json is parseable and exposes stable JSON Feed items', (t) => {
  const rawFeed = readGeneratedText(t, 'feed.json')

  assert.ok(rawFeed.trim().length > 0)
  assert.doesNotMatch(rawFeed, /\[object Object\]/)

  const feed = JSON.parse(rawFeed)
  assert.equal(feed.version, 'https://jsonfeed.org/version/1.1')
  assert.equal(feed.home_page_url, siteUrl)
  assert.equal(feed.feed_url, `${siteUrl}/feed.json`)
  assert.equal(feed.language, 'fr-FR')
  assert.ok(Array.isArray(feed.authors))
  assert.ok(Array.isArray(feed.items))
  assert.ok(feed.items.length > 0, 'Expected feed items')

  for (const [index, item] of feed.items.entries()) {
    assert.equal(typeof item.id, 'string')
    assert.equal(typeof item.url, 'string')
    assert.equal(typeof item.title, 'string')
    assert.equal(typeof item.content_html, 'string')
    assert.equal(typeof item.summary, 'string')
    assert.ok(item.url.startsWith(`${siteUrl}/eco-conception/`))
    assert.ok(item.url.endsWith('/'), `Feed item URL should keep trailing slash: ${item.url}`)
    assert.equal(item.id, item.url)
    assertValidDate(item.date_published, `feed item ${index}`)
    assert.ok(Array.isArray(item.tags))
  }
})
