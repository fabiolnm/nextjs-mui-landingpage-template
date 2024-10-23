'use client'

import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// https://mui.com/material-ui/integrations/nextjs/#font-optimization
const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
})

export function AppTheme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {/* https://web.dev/articles/color-scheme */}
      {/* https://mui.com/material-ui/react-css-baseline/#color-scheme */}
      {/* https://mui.com/material-ui/customization/dark-mode/#:~:text=Adding%20%3CCssBaseline%20/%3E%20inside%20of%20the%20%3CThemeProvider%3E%20component%20will%20also%20enable%20dark%20mode%20for%20the%20app%27s%20background. */}
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  )
}
