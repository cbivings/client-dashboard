import React from 'react';
import { AppBar,Box, Toolbar, Typography } from '@mui/material';


const TopBar = () => {
  return (
    <AppBar>
      <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
        <Box component="img" 
            sx={{ maxHeight:'1.5em', width:'5em', p: 0 }}
            src="/finnilogo.svg">
        </Box>
        <Typography variant="h1" component="div">Customer Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;