import React from 'react'
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';


export default function header() {
    return (
        <AppBar position="static" style={{backgroundColor: "#FFFFFF", width: "100%", display: "flex", justifyContent: "flex-start"}}>
        <Toolbar>
        {/*  <IconButton edge="start" color="inherit" aria-label="menu">
        //   <Menu />
    //   </IconButton> */}
          {/* <Typography variant="h6" style={{flex: 1, color: "#222222"}}>
            Logo
          </Typography> */}
          <p style={{margin: 0, fontSize: 14, fontWeight: "bold", color: "#443977", paddingRight: 10, flex: 1}}>Logo</p>
          <p style={{margin: 0, fontSize: 14, fontWeight: "bold", color: "#443977", paddingRight: 10}}>A propos</p>
          <p style={{margin: 0, fontSize: 14, fontWeight: "bold", color: "#443977", padding: 5, border: "2px solid #443977", borderRadius: "10px"}}>Connexion</p>
        </Toolbar>
      </AppBar>
    )
}
