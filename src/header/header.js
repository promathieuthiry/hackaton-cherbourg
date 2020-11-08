import React from 'react'
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Logo from "../assets/image/logodef.png"
import FrenchFlag from "../assets/image/flagFrance.png"
import GBFlag from "../assets/image/flag greatBritain.png"



export default function header(props) {
    return (
        <AppBar position="static" style={{backgroundColor: "#FFFFFF", width: "100%", display: "flex", justifyContent: "flex-start"}}>
        <Toolbar>
        {/*  <IconButton edge="start" color="inherit" aria-label="menu">
        //   <Menu />
    //   </IconButton> */}
          {/* <Typography variant="h6" style={{flex: 1, color: "#222222"}}>
            Logo
          </Typography> */}
          <div style={{}}>
          <img src={Logo} alt={''} width={70} height={"auto"} />
          </div>
          <p style={{ margin: 0, fontSize: 16, fontWeight: "bold", color: "#443977", paddingRight: 10, flex: 1}}>
          {props.isEnglish ? "Solidarity with independant business !" : "L'alliance avec les commerçants"}
          </p>

            {/* <img src={FrenchFlag} width="auto" height="20" alt="" />
            <img src={GBFlag} width="auto" height="20" alt="" /> */}

          {/* <div onClick={() => props.translate()}>
          <p style={{ margin: 0, fontSize: 14, fontWeight: "bold", color: "#443977", paddingRight: 10}}>Français</p>
          </div> */}
          <a style={{textDecoration: "none"}} href={"https://github.com/promathieuthiry/hackaton-cherbourg/blob/main/README.md"} target={"_blank"}  without rel="noreferrer">
          <p  style={{ margin: 0, fontSize: 14, fontWeight: "bold", color: "#443977", paddingRight: 10}}>A propos</p>
          </a>
          
          <p onClick={() => props.isEnglish ? props.translateFrench() : props.translate()} style={{cursor: "pointer", margin: 0, fontSize: 14, fontWeight: "bold", color: "#443977", padding: 5, border: "2px solid #443977", borderRadius: "10px"}}>
          
          {props.isEnglish ? "Translate" : "Traduire"}

          </p>
         
        </Toolbar>
      </AppBar>
    )
}
