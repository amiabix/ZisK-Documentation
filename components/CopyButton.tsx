'use client'

import { useEffect, useState } from 'react'

export default function CopyButton() {
  useEffect(() => {
    const addCopyButtons = () => {
      // Find .nextra-code-block containers
      const codeBlockContainers = document.querySelectorAll('.nextra-code-block')
      codeBlockContainers.forEach((container) => {
        // Skip if already has a copy button
        if (container.querySelector('.copy-button')) {
          return
        }

        const pre = container.querySelector('pre')
        if (!pre) return

        const code = pre.querySelector('code')
        if (!code) return

        const button = document.createElement('button')
        button.className = 'copy-button'
        button.setAttribute('aria-label', 'Copy code')
        button.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        `
        
        button.addEventListener('click', async (e) => {
          e.stopPropagation()
          e.preventDefault()
          const text = code.textContent || ''
          try {
            await navigator.clipboard.writeText(text)
            button.classList.add('copied')
            button.innerHTML = `
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            `
            setTimeout(() => {
              button.classList.remove('copied')
              button.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              `
            }, 2000)
          } catch (err) {
            console.error('Failed to copy:', err)
          }
        })

        // Ensure container has position relative
        const containerStyle = getComputedStyle(container)
        if (containerStyle.position === 'static' && container instanceof HTMLElement) {
          container.style.position = 'relative'
        }
        
        // Append to container, not pre, so it's outside the scrollable area
        container.appendChild(button)
      })

      // Handle standalone pre elements (fallback for code blocks without .nextra-code-block wrapper)
      const standalonePre = document.querySelectorAll('pre:not(.nextra-code-block pre)')
      standalonePre.forEach((pre) => {
        // Skip if already inside a .nextra-code-block or has a button
        if (pre.closest('.nextra-code-block') || pre.querySelector('.copy-button')) {
          return
        }

        const code = pre.querySelector('code')
        if (!code) return

        const button = document.createElement('button')
        button.className = 'copy-button'
        button.setAttribute('aria-label', 'Copy code')
        button.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        `
        
        button.addEventListener('click', async () => {
          const text = code.textContent || ''
          try {
            await navigator.clipboard.writeText(text)
            button.classList.add('copied')
            button.innerHTML = `
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            `
            setTimeout(() => {
              button.classList.remove('copied')
              button.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              `
            }, 2000)
          } catch (err) {
            console.error('Failed to copy:', err)
          }
        })

        if (pre instanceof HTMLElement) {
          pre.style.position = 'relative'
        }
        pre.appendChild(button)
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

