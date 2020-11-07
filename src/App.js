import './App.css';
import React, { Component } from 'react'
import Header from "./header/header"
import Cover from "./header/cover"
import SearchRetailer from "./Form/searchRetailer"
import CardRetailers from "./Form/cardRetailers"

export default class App extends Component {

  state = {
    rawData: [],
    filterData: []
  }

  componentDidMount () {
    this.getData()
}

async getData () {
    const data = await fetch('http://julienv8.sg-host.com/api/commerces?page=1')
    const rawData = await data.json()
    console.log(rawData, "rawData")
    this.setState({rawData, filterData: rawData})

}

render () {
  return (
    <div className="App">
    <Header />
    <Cover />
    <div style={{padding: 20, display: "flex", flexDirection: "column", alignItems: "center", width: "100%", justifyContent: "center", marginTop: 20}}>
    <p style={{color: "#484848", margin: 0, fontSize: 30, fontWeight: "bold", marginBottom: 10}}> Pourquoi le site Cotentin'uni?
    
    </p>
    <p style={{margin: 0, fontSize: 24, width: "60%"}}>
        Le but est de vous informer, vous guider et aider nos entreprises indépendantes. 
        Facilitons vos échanges !
        Aujourd'hui et plus que jamais, vos achats témoignent de votre engagement.
        Vous aussi, devenez consomm'acteur !</p>
        </div>
    <SearchRetailer />
    {this.state.filterData.map(retailer => {
      return (
        <CardRetailers 
          key={retailer.id}
        />
      )
    })}
    </div>
  )}
}

