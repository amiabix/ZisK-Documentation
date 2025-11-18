'use client'

import { useEffect } from 'react'

const COPY_ICON_SVG = `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
`

const CHECK_ICON_SVG = `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
`

const COPY_TIMEOUT = 2000

function createCopyButton(codeElement: HTMLElement): HTMLButtonElement {
  const button = document.createElement('button')
  button.className = 'copy-button'
  button.setAttribute('aria-label', 'Copy code')
  button.innerHTML = COPY_ICON_SVG

  button.addEventListener('click', async (e) => {
    e.stopPropagation()
    e.preventDefault()
    
    const text = codeElement.textContent || ''
    if (!text) return

    try {
      await navigator.clipboard.writeText(text)
      button.classList.add('copied')
      button.innerHTML = CHECK_ICON_SVG
      
      setTimeout(() => {
        button.classList.remove('copied')
        button.innerHTML = COPY_ICON_SVG
      }, COPY_TIMEOUT)
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to copy:', err)
      }
    }
  })

  return button
}

function ensureRelativePosition(element: HTMLElement): void {
  const style = getComputedStyle(element)
  if (style.position === 'static') {
    element.style.position = 'relative'
  }
}

export default function CopyButton() {
  useEffect(() => {
    const addCopyButtons = () => {
      // Handle Nextra code blocks
      const codeBlockContainers = document.querySelectorAll('.nextra-code-block')
      codeBlockContainers.forEach((container) => {
        if (container.querySelector('.copy-button')) {
          return
        }

        const pre = container.querySelector('pre')
        if (!pre) return

        const code = pre.querySelector('code')
        if (!code) return

        const button = createCopyButton(code as HTMLElement)
        
        if (container instanceof HTMLElement) {
          ensureRelativePosition(container)
          container.appendChild(button)
        }
      })

      // Handle standalone pre elements
      const standalonePre = document.querySelectorAll('pre:not(.nextra-code-block pre)')
      standalonePre.forEach((pre) => {
        if (pre.closest('.nextra-code-block') || pre.querySelector('.copy-button')) {
          return
        }

        const code = pre.querySelector('code')
        if (!code) return

        const button = createCopyButton(code as HTMLElement)

        if (pre instanceof HTMLElement) {
          ensureRelativePosition(pre)
          pre.appendChild(button)
        }
      })
    }

    addCopyButtons()

    const observer = new MutationObserver(addCopyButtons)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}

