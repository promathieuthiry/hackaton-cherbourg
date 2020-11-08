import React from 'react'
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';



export default function footer() {
    return (
        <a style={{textDecoration: "none"}} href={"https://github.com/promathieuthiry/hackaton-cherbourg/blob/main/README.md"} target={"_blank"}  without rel="noreferrer">
       <div style={{height: 50, width: "100%", backgroundColor: "#420060", marginTop: 50, display: 'flex', flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <p style={{margin: 0, color: "white"}}>Fait avec </p>
            <Favorite style={{color: "#EA3558", paddingLeft: 5, paddingRight: 5}} />
            <p style={{margin: 0, color: "white"}}>par l'équipe solidaire</p>
        </div>
        </a>
    )
}
