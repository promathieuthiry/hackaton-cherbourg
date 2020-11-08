import React, { Component } from 'react'
import { Storefront, Call, Navigation } from '@material-ui/icons';


export default class CardRetailers extends Component {

    
    render() {
        const { retailer } = this.props
        console.log(retailer, "retailer")
        return (
            <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
            <div style={{width: 600, paddingLeft: 30, paddingRight: 30, paddingTop: 30, paddingBottom: 10, bordeRadius: "50px", background: "#ffffff" , borderRadius: 10, boxShadow:  "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff", display: "flex", flexDirection: "column"}}>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <div style={{width: 50, height: 50, backgroundColor: 'blue', borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                 <Storefront style={{color: "#FFFFFF"}}/>
                 </div>
            
            <div style={{display: 'flex', flexDirection: "column", paddingLeft: 10, width: "100%"}}>
            <p style={{margin: 0, fontSize: 18, fontWeight: "bold", color: "#443977", paddingRight: 10}}>{retailer.Name}</p>
            <p style={{margin: 0, fontSize: 12, fontWeight: "normal", color: "#222222", paddingRight: 10}}>{retailer.categorie}</p>
            <a href={retailer.website} target={"_blank"} rel="noreferrer"><p style={{margin: 0, fontSize: 12, fontWeight: "normal", color: "#222222", paddingRight: 10}}>Consulter site web</p></a>

            </div>
            </div>
            <p style={{margin: 0, fontSize: 12, fontWeight: "normal", color: "#222222", paddingRight: 10, marginTop: 10}}>{retailer.description}</p>

            {/* Label */}
            {/* <div style={{display: "flex", flexDirection: "row", marginTop: 20, flexWrap: "wrap", paddingBottom: 20}}>
            <div style={{backgroundColor: "#EDFAF0", paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, width: 160, borderRadius: 20, marginBottom: 10}}>
            <p style={{margin: 0, color: "#58C8AA", fontWeight: "bold", fontSize: "14px", textAlign: "center"}}>Commande à distance</p>
            </div>

            <div style={{backgroundColor: "#FDF1E3", paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, width: 160, borderRadius: 20, marginLeft: 10, marginBottom: 10}}>
            <p style={{margin: 0, color: "#FE9750", fontWeight: "bold", fontSize: "14px", textAlign: "center"}}>Livraison à domicile</p>
            </div>

            <div style={{backgroundColor: "#c2d0fc", paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, width: 260, borderRadius: 20, marginLeft: 10, marginBottom: 10}}>
            <p style={{margin: 0, color: "#7295ff", fontWeight: "bold", fontSize: "14px", textAlign: "center"}}>Retrait des commandes en magasins</p>
            </div>
            
            </div> */}
                 <div style={{height: "1px", width: "100%", backgroundColor: "#d3d3d3", marginTop: 10}} />
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: 10}}>
            <div style={{flex: 1, display: "flex", flexDirection: "row", alignItems: "center"}}>
            
            <div style={{width: 30, height: 30, backgroundColor: '#1A73E8', borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                 <Navigation style={{color: "#FFFFFF", fontSize: "18px"}}/>
                 </div>
                <p style={{margin: 0, fontSize: 12, paddingLeft: 5, fontWeight: "normal", color: "#555555"}}>{retailer.adress}</p>
                </div>


                <div style={{width: 30, height: 30, backgroundColor: 'green', borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                 <Call style={{color: "#FFFFFF", fontSize: "18px"}}/>
                 </div>
                <p style={{margin: 0, fontSize: 12, paddingLeft: 5, fontWeight: "normal", color: "#555555"}}>+33 62 70 90 43 11</p>
            </div>
            </div>
            </div>

        )
    }
}

