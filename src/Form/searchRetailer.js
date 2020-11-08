import React,  {Component} from 'react'
import { TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button } from '@material-ui/core';
import "../App.css"
import Helper from '../helpers/helper';


export default class SearchRetailer extends Component {

  

    onHandleChange (category) {
        this.setState({category})
    }

    render () {
    return (
        <div id="searchForm" style={{display: "flex", justifyContent: "flex-end",}}>
        <div id="formPaper">
        <h1 style={{ margin: 0, textAlign: "center", color: "#555555",}}>
       {this.props.isEnglish ? "Welcome to the Cotent'uni website" : "Bienvenue sur Cotent'uni"} 
        </h1>
     

              <div style={{display: "flex", flexDirection: "row", height: 200, width: "100%", justifyContent: 'space-between', alignItems: "center", marginTop: 20, marginBottom: 20}}>

              <div style={{width: "50%", borderRight: "1px solid red"}}>
              <h3 style={{ margin: 0, textAlign: "left", marginBottom: 50, color: "#555555", fontSize: 20}}>
              {this.props.isEnglish ? `The website which lists your businesses in the Cotentin! ${this.props.retailer.length}` : `le site qui recense vos commerçants dans le Cotentin ! (${this.props.retailer.length})`} 

              
              </h3>
              </div>
              <div style={{width:"50%", paddingLeft:20,}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                   <TextField
                        className={"h-search-box"}
                      placeholder={this.props.isEnglish ? "Businesses" : "Rechercher un commerçant"}
                        style={{height:50, padding:0, width:"60%", backgroundColor:"#FFFFFF", marginBottom: 20}}
                        InputProps={{
                            style: {height:50, color:'#222222', backgroundColor:"#FAFAFA"},
                       }}

                       value={this.props.searchText}
                       onChange={(event)=>{this.props.onSearchTextChanged(event.target.value)}}
                        margin="none"
                       variant="outlined"
                   />
                
        <FormControl>
        <Select
          style={{width: "100%"}}
          displayEmpty
          value={this.props.categorySelected}
          onChange={(event) => this.props.onCategoryChanged(event.target.value)}
          inputProps={{ 'aria-label': 'Without label' }}
        >
        <MenuItem value="" disabled>
        {this.props.isEnglish ? "Categories" : "Catégories"}
          </MenuItem>
          {this.props.categoryAvailable.map((cat, index) => {
            return (
              <MenuItem key={`cat: ${index}`} value={cat}>
              <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
              <div style={{width: 20, height: 20, borderRadius: "50%", marginRight: 10, backgroundColor: Helper.colorCategory(cat)}}>
              </div>
              {cat}
              </div>
              </MenuItem>
            )
          })}
         
        </Select>
        <FormHelperText>{this.props.isEnglish ? "Choose one category" : "Sélectionner par catégories"}</FormHelperText>

      </FormControl>

      <Button size="small" variant="contained" style={{zIndex: 2, backgroundColor: '#1079FC', color: "#fff", marginTop: 20, width: 200}}>
      {this.props.isEnglish ? "Search" : "Rechercher"}
    </Button>
      </div>
    
      
    </div>
        </div>
        </div>
        </div>
    )}
}
