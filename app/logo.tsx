'use client'

import { SvgIcon } from '@mui/material'

import SvgLogo from './logo.svg'

export function Logo({ sx }: { sx: any | undefined }) {
  return <SvgIcon component={SvgLogo} inheritViewBox sx={sx} />
}
