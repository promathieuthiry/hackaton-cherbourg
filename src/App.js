import './App.css';
import React, { Component } from 'react'
import Header from "./header/header"
import Cover from "./header/cover"
import SearchRetailer from "./Form/searchRetailer"
import CardRetailers from "./Form/cardRetailers"
import Footer from "./header/footer"
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';

export default class App extends Component {

  state = {
    rawData: [],
    filterData: [],
    searchText: "",
    loadingData: false,
    categoryAvailable: [],
    categorySelected: "",
    isEnglish: false
  }

  componentDidMount () {
    this.getData()
}

async getData () {
  try {
    this.setState({loadingData: true})
    const data = await fetch('https://julienv8.sg-host.com/api/commerces', {method: "GET",
    headers: {
      "access-control-allow-origin" : "*",
      "Content-type": "application/json; charset=UTF-8"
    }})
    const rawData = await data.json()
    const rawCategories = rawData.map(el => el.categorie)
    const categoryAvailable = [...new Set(rawCategories)]
    console.log(categoryAvailable)
    this.setState({rawData, filterData: rawData, loadingData: false, categoryAvailable, isEnglish: false})
  } catch (error) {
    console.warn(error)
    this.setState({loadingData: false})
  }
  
}

onHandleTextChanged (searchText) {
  this.setState({searchText})
}

async getDataEng () {
  try {
    this.setState({loadingData: true})
    const data = await fetch('https://julienv8.sg-host.com/api/commerce_ens', {method: "GET",
    headers: {
      "access-control-allow-origin" : "*",
      "Content-type": "application/json; charset=UTF-8"
    }})
    const rawData = await data.json()
    const rawCategories = rawData.map(el => el.categorie)
    const categoryAvailable = [...new Set(rawCategories)]
    console.log(categoryAvailable)
    this.setState({rawData, filterData: rawData, loadingData: false, categoryAvailable, isEnglish: true})
  } catch (error) {
    console.warn(error)
    this.setState({loadingData: false})
  }
}

different () {
  this.setState((previousState) => ({
    isEnglish: !previousState
  }));
}

render () {
  return (
    <div className="App">
    <Header 

      isEnglish={this.state.isEnglish}
      translate={() => this.getDataEng()}
      translateFrench={() => this.getData()}
    />
    <Cover />
    <div style={{padding: 20, display: "flex", flexDirection: "column", alignItems: "center", width: "100%", justifyContent: "center", marginTop: 20}}>
    <p style={{color: "#484848", margin: 0, fontSize: 30, fontWeight: "bold", marginBottom: 10}}>
     {this.state.isEnglish ? "Why Cotent'uni?" : "Pourquoi le site Cotentin'uni?"}
    </p>
    <p style={{margin: 0, fontSize: 24, width: "60%"}}>
    {this.state.isEnglish ? 
    "The purpose is to inform you, guide you and help our independent companies. let's facilitate your exchanges ! Today and more than ever, your purchases bear witness to your commitment. You too, become a consum'actor!" 
    : "Le but est de vous informer, vous guider et aider nos entreprises indépendantes. Facilitons vos échanges Aujourd'hui et plus que jamais, vos achats témoignent de votre engagement. Vous aussi, devenez consomm'acteur !"
    }
        </p>
        </div>
    <SearchRetailer 
      categoryAvailable={this.state.categoryAvailable}
      categorySelected={this.state.categorySelected}
      retailer={this.state.filterData}
      searchText={this.state.searchText}
      onSearchTextChanged={(text) => this.onSearchTextChanged(text)}
      onCategoryChanged={(text) => this.onHandleChangeCategory(text)}
      isEnglish={this.state.isEnglish}
    />
    {this.state.filterData && this.state.filterData.map(retailer => {
      return (
        <CardRetailers 
          key={retailer.id}
          retailer={retailer}
        />
      )
    })}
    {!this.state.loadingData && <Footer />}
    </div>
  )}

  onHandleChangeCategory (categorySelected) {
    let data = this.state.rawData;
    let filterData = data.filter(el => el.categorie === categorySelected)
    this.setState({categorySelected, filterData})
}

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

