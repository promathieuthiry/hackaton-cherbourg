import './App.css';
import React, { Component } from 'react'
import Header from "./header/header"
import Cover from "./header/cover"
import SearchRetailer from "./Form/searchRetailer"
import CardRetailers from "./Form/cardRetailers"

export default class App extends Component {

  state = {
    rawData: [],
    filterData: [],
    searchText: "",
  }

  componentDidMount () {
    this.getData()
}

async getData () {
    const data = await fetch('http://julienv8.sg-host.com/api/commerces?page=1')
    const rawData = await data.json()
    this.setState({rawData, filterData: rawData})

}

onHandleTextChanged (searchText) {
  this.setState({searchText})
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
    <SearchRetailer 
      searchText={this.state.searchText}
      onSearchTextChanged={(text) => this.onSearchTextChanged(text)}
    />
    {this.state.filterData && this.state.filterData.map(retailer => {
      return (
        <CardRetailers 
          key={retailer.id}
          retailer={retailer}
        />
      )
    })}
    </div>
  )}



  onSearchTextChanged(text){
    
    let data = this.state.rawData;
    let searchResults = [];
    for(let retailer of data){
            let hash = "";
            if(retailer.Name){hash = hash + " " + retailer.Name.toUpperCase()}

            if(hash.indexOf(text.toUpperCase()) !== -1){
                searchResults.push({
                  ...retailer
                })
            }
        
    }

    this.setState({
        searchText:text,
        filterData:searchResults,
    })
}
}

