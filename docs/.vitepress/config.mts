import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
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
          { text: 'Home', link: '/' },
          { text: 'Blog', link: '/blog' },
          { text: 'Egg Tempera', link: '/eggtempera' },
          { text: 'Charcoal', link: '/charcoal' },
          { text: 'Other', link: '/other' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
