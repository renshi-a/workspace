import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/docs/',
  title: "Resnshi Asada",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
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
