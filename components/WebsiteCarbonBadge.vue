<template>
  <div
    ref="badgeContainer"
    id="wcb"
    class="carbonbadge wcb-d"
  ></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const badgeContainer = ref(null)

onMounted(async () => {
  if (!badgeContainer.value) return

  try {
    // Fetch carbon data from Website Carbon API
    const url = 'https://beabot.netlify.app'
    const response = await fetch(`https://api.websitecarbon.com/b?url=${encodeURIComponent(url)}`)
    const data = await response.json()

    if (data && data.c) {
      const carbon = data.c.toFixed(2)
      const percentage = data.p.toFixed(0)

      // Create badge HTML
      badgeContainer.value.innerHTML = `
        <div id="wcb_g">
          <span id="wcb_2">Website Carbon</span>
        </div>
        <div id="wcb_a">
          ${carbon}g of CO<sub>2</sub>/view
        </div>
      `

      // Add styles
      const style = document.createElement('style')
      style.textContent = `
        #wcb.carbonbadge {
          --b1: #0e11a8;
          --b2: #00ffbc;
          font-size: 15px;
          text-align: center;
          color: var(--b1);
          line-height: 1.15;
        }
        #wcb.carbonbadge sub {
          vertical-align: middle;
          position: relative;
          top: .3em;
          font-size: .7em;
        }
        #wcb #wcb_2, #wcb #wcb_a, #wcb #wcb_g {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 1em;
          line-height: 1.15;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          text-decoration: none;
          margin: .2em 0;
        }
        #wcb #wcb_a, #wcb #wcb_g {
          padding: .3em .5em;
          border: .13em solid var(--b2);
        }
        #wcb #wcb_g {
          border-radius: .3em 0 0 .3em;
          background: #fff;
          border-right: 0;
          min-width: 8.2em;
        }
        #wcb #wcb_a {
          border-radius: 0 .3em .3em 0;
          border-left: 0;
          background: var(--b1);
          color: #fff;
          font-weight: 700;
          border-color: var(--b1);
        }
        #wcb.wcb-d #wcb_a {
          color: var(--b1);
          background: var(--b2);
          border-color: var(--b2);
        }
        #wcb.wcb-d #wcb_2 {
          color: #fff;
        }
      `

      if (!document.getElementById('wcb-badge-styles')) {
        style.id = 'wcb-badge-styles'
        document.head.appendChild(style)
      }
    }
  } catch (error) {
    console.error('Failed to load Website Carbon badge:', error)
  }
})
</script>
