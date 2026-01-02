import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/*.md', {
  transform(raw) {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title || '無題の記事',
        url,
        date: frontmatter.date
      }))
      .sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
  }
})