<script setup lang="ts">
import { profile, stack, projects } from './data'

const year = new Date().getFullYear()
</script>

<template>
  <a class="skip" href="#main">Skip to content</a>

  <header class="top">
    <span class="mark">GB</span>
    <nav aria-label="Primary">
      <a href="#work">Work</a>
      <a href="#stack">Stack</a>
      <a href="#about">About</a>
    </nav>
  </header>

  <main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <p class="eyebrow">{{ profile.location }}</p>
      <h1 id="hero-title">
        {{ profile.name }}<span class="dot">.</span>
      </h1>
      <p class="role">{{ profile.role }}</p>
      <p class="focus">{{ profile.focus }}</p>
      <div class="cta">
        <a class="btn primary" :href="profile.links.github" target="_blank" rel="noopener">GitHub</a>
        <a class="btn" :href="profile.links.linkedin" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </section>

    <section id="work" aria-labelledby="work-title">
      <h2 id="work-title"><span class="num">01</span> Selected work</h2>
      <ul class="grid">
        <li v-for="p in projects" :key="p.name" class="card">
          <div class="card-head">
            <h3>{{ p.name }}</h3>
            <span class="badge" :data-status="p.status">{{ p.status }}</span>
          </div>
          <p class="tagline">{{ p.tagline }}</p>
          <p class="desc">{{ p.description }}</p>
          <ul class="chips" aria-label="Stack">
            <li v-for="s in p.stack" :key="s">{{ s }}</li>
          </ul>
          <a v-if="p.repo" class="link" :href="p.repo" target="_blank" rel="noopener">
            View repository <span aria-hidden="true">→</span>
          </a>
          <span v-else class="link muted">Private repository · demo on request</span>
        </li>
      </ul>
    </section>

    <section id="stack" aria-labelledby="stack-title">
      <h2 id="stack-title"><span class="num">02</span> Stack</h2>
      <div class="stack">
        <div v-for="g in stack" :key="g.group" class="stack-group">
          <h3>{{ g.group }}</h3>
          <ul class="chips">
            <li v-for="i in g.items" :key="i">{{ i }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title"><span class="num">03</span> About</h2>
      <div class="about">
        <p v-for="(para, i) in profile.bio" :key="i">{{ para }}</p>
      </div>
    </section>
  </main>

  <footer class="foot">
    <span>© {{ year }} {{ profile.name }}</span>
    <span>Built with Vue 3 + TypeScript · <a href="https://github.com/gutembergborges/portfolio">source</a></span>
  </footer>
</template>
