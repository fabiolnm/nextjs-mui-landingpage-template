import { Roboto } from 'next/font/google'

// https://mui.com/material-ui/integrations/nextjs/#font-optimization
export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})
