import React from 'react'
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Logo from "../assets/image/logodef.png"
import FrenchFlag from "../assets/image/flagFrance.png"
import GBFlag from "../assets/image/flag greatBritain.png"



export default function header(props) {
    return (
        <AppBar position="static" style={{backgroundColor: "#FFFFFF", width: "100%", display: "flex", justifyContent: "flex-start"}}>
        <Toolbar style={{width: "100%", padding: 0, marginRight: 0}}>

          <img src={Logo} alt={''} width={70} height={"60"} style={{margin: 0, paddingLeft: 5}}/>
          <p style={{ margin: 0, fontSize: 16, fontWeight: "bold", color: "#443977", paddingRight: 10, flex: 1}}>
          {props.isEnglish ? "Solidarity with independant business !" : "L'alliance avec les commerçants"}
          </p>

         
          <a style={{textDecoration: "none"}} href={"https://github.com/promathieuthiry/hackaton-cherbourg/blob/main/README.md"} target={"_blank"}  without rel="noreferrer">
          <p  style={{ margin: 0, fontSize: 14, fontWeight: "bold", color: "#443977", paddingRight: 10}}>A propos</p>
          </a>
          
          <p onClick={() => props.isEnglish ? props.translateFrench() : props.translate()} style={{cursor: "pointer", margin: 0, marginRight: 5, fontSize: 14, fontWeight: "bold", color: "#443977", padding: 5, border: "2px solid #443977", borderRadius: "10px"}}>
          
          {props.isEnglish ? "Translate" : "Traduire"}

          </p>
         
        </Toolbar>
      </AppBar>
    )
}
