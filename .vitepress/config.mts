import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SWAGI BloomBot",
  description: "Arcelo MNHS's DSTF Robotics RIM Entry Documentation",
  head: [['link', {rel: 'icon', href: '/dstf-robotics-docs/favicon.ico'}]],
  base: '/dstf-robotics-docs/',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'SWAGI BloomBot',
    logo: '/assets/robot-swagi.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/01-welcome' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: '🚀 Welcome', link: '/01-welcome' },
          { text: '🎯 Objectives', link: '/02-objectives' },
          { text: '📖 Definition of Terms', link: '/03-definition-of-terms' }
        ]
      },

      {
        text: 'Sections',
        items: [
          { text: '🔨 System Architecture', link: '/sections/01-system-architecture' },
          { text: '⚙️ Parts', link: '/sections/02-parts' },
          { text: '🔌 Wiring Diagram', link: '/sections/03-wiring-diagram' },
          { text: '♾️ Arduino and ESP32 Software Fundamentals', link: '/sections/04-arduino-esp-fundamentals' },        
          { text: '💻 Code Explanation', link: '/sections/05-code-explanation' },        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/piyeldev/dstf-robotics-docs' }
    ],

    outline: {
      level: [2, 3],
      label: 'On this page'
    }

  }
})
