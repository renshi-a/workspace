import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/docs/',
  title: "Resnshi Asada",
  description: "",
  themeConfig: {
    search: {
      provider: 'local'
    }, 
    
    lastUpdated: {
      text: '最終更新日',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Blog Post', link: '/blog' }
        ]
      },
      {
        text: `Art`,
        items: [
          { text: 'Egg Tempera', link: '/eggtempera' },
          { text: 'Charcoal', link: '/charcoal' }
        ]
      },
      {
        text: `Other`,
        items: [
          { text: 'Enginnering', link: '/enginnering' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
