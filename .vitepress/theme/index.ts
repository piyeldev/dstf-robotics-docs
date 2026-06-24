// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { useData, useRoute, type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'
import Layout from './Layout.vue'
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },

} satisfies Theme
