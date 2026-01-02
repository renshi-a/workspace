---
title: Charcoal
---

<script setup>
import { data as posts } from './charcoal.data.ts'
import { withBase } from 'vitepress'

const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

# Posts

<div class="post-list">
    <article v-for="post in posts" :key="post.url" class="post-item">
        <time class="post-date">{{ formatDate(post.date) }}</time>
        <h2 class="post-title">
            <a :href=withBase(post.url)>{{ post.title }}</a>
        </h2>
    </article>
</div>

<style scoped>
.post-list { margin-top: 40px; }
.post-item { margin-bottom: 30px; }
.post-date { display: block; font-size: 0.9rem; color: #666; margin-bottom: 4px; }
.post-title { margin: 0; border: none; padding: 0; font-size: 1.4rem; }
.post-title a { text-decoration: none; }
.post-title a:hover { text-decoration: underline; }
</style>