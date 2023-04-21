import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Avatar from '@mui/material/Avatar';
import avatar from './assets/theo-avatar.png'

function CvAppBar() {
  return (
    <AppBar position="static" style={{width: '100vw', alignSelf: 'stretch', justifySelf: 'stretch'}}>
      <Toolbar>
        <Button color="inherit" href="/" sx={{marginLeft: 2}}>Resume</Button>
        <Button color="inherit" href="/about-me">About Me</Button>
        <IconButton color="inherit" href="https://github.com/theo-sardin/theocv" >
          <GitHubIcon />
        </IconButton>
        
        <div style={{ flexGrow: 1 }} />

        <Avatar alt="Theo Sardin" src={avatar} sx={{marginRight: 2}} />
      </Toolbar>
    </AppBar>
  );
}

export default CvAppBar;