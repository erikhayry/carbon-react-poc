import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import '@/index.css'
import { routeTree } from '@/routeTree.gen'
import { deLocalizeUrl, getLocale, localizeUrl } from '@/paraglide/runtime'

const router = createRouter({
  routeTree,
  // Routes are defined without a locale; the /en or /sv prefix is stripped on the way in and added on the way out
  rewrite: {
    input: ({ url }) => deLocalizeUrl(url),
    output: ({ url }) => localizeUrl(url),
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

document.documentElement.lang = getLocale()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
