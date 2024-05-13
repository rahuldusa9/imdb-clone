'use client'
import React from 'react'

import { ThemeProvider } from 'next-themes'

export default function Provider({children}) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <div classname="dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  )
}
