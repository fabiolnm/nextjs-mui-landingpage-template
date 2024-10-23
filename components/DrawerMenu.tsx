'use client'

import { useState } from 'react'

import { CloseRounded, Menu } from '@mui/icons-material'
import {
  Box, Button, Divider, Drawer, IconButton, MenuItem,
} from '@mui/material'

import ColorModeIconDropdown from '@/theme/ColorModeIconDropdown'

export function DrawerMenu() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
      <ColorModeIconDropdown size="medium" />
      <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
        <Menu />
      </IconButton>
      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            top: 'var(--template-frame-height, 0px)',
          },
        }}
      >
        <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <IconButton onClick={toggleDrawer(false)}>
              <CloseRounded />
            </IconButton>
          </Box>

          <MenuItem>Features</MenuItem>
          <MenuItem>Testimonials</MenuItem>
          <MenuItem>Highlights</MenuItem>
          <MenuItem>Pricing</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <MenuItem>Blog</MenuItem>
          <Divider sx={{ my: 3 }} />
          <MenuItem>
            <Button color="primary" variant="contained" fullWidth>
              Sign up
            </Button>
          </MenuItem>
          <MenuItem>
            <Button color="primary" variant="outlined" fullWidth>
              Sign in
            </Button>
          </MenuItem>
        </Box>
      </Drawer>
    </Box>
  )
}
