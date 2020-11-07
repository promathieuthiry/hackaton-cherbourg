import React from 'react'
import ShoppingCover from "../assets/image/shopping.png"
import SvgShoppingCard from "./svgShoppingCard"

export default function Cover() {
    return (
        <div style={{width: "100%", height: "auto", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between",  }}>
        <div style={{fontFamily: 'Playfair Display', paddingLeft: 50, maxWidth: 800}}>
        <p style={{margin: 0, fontSize: 40, textAlign: "left", marginBottom: 50}}>Bienvenue sur Cotent'uni, le site qui recense vos commerçants dans le Cotentin !</p>
        <p style={{margin: 0, fontSize: 20, textAlign: "left"}}>
        Le but est de vous informer, vous guider et aider nos entreprises indépendantes. 
        Facilitons vos échanges !
        Aujourd'hui et plus que jamais, vos achats témoignent de votre engagement.
        Vous aussi, devenez consomm'acteur !</p>
        </div>
         {/* <div>
             <img src={ShoppingCover} alt='' style={{maxWidth: 600, height: 'auto'}} />
            </div> */}
        </div>
    )
}
