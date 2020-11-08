import React,  {Component} from 'react'
import { TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button } from '@material-ui/core';
import "../App.css"


export default class SearchRetailer extends Component {

  

    onHandleChange (category) {
        this.setState({category})
    }

    render () {
    return (
        <div id="searchForm" style={{display: "flex", justifyContent: "flex-end",}}>
        <div id="formPaper">
        <h1 style={{ margin: 0, textAlign: "center", color: "#555555",}}>Bienvenue sur Cotent'uni</h1>
     

              <div style={{display: "flex", flexDirection: "row", height: 200, width: "100%", justifyContent: 'space-between', alignItems: "center", marginTop: 20, marginBottom: 20}}>

              <div style={{width: "50%", borderRight: "1px solid red"}}>
              <h3 style={{ margin: 0, textAlign: "left", marginBottom: 50, color: "#555555", fontSize: 20}}>
              le site qui recense vos commerçants dans le Cotentin ! ({this.props.retailer.length})
              </h3>
              </div>
              <div style={{width:"50%", paddingLeft:20,}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                   <TextField
                        className={"h-search-box"}
                      placeholder={"Rechercher un commerçant"}
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
        Catégories
          </MenuItem>
          {this.props.categoryAvailable.map((cat, index) => {
            return (
              <MenuItem value={cat}>{cat}</MenuItem>
            )
          })}
         
        </Select>
        <FormHelperText>Sélectionner par catégories</FormHelperText>

      </FormControl>

      <Button size="small" variant="contained" style={{zIndex: 2, backgroundColor: '#1079FC', color: "#fff", marginTop: 20, width: 200}}>
                                        Rechercher
    </Button>
      </div>
    
      
    </div>
        </div>
        </div>
        </div>
    )}
}

// renderSearchBox(){

//     const active = this.state.searchText.length > 0;
//     const hasAccessGeolite = Tools.isAuthorizedAccessGeolite();

//     return(
//         <div style={{height:"100%", width:400, position:"relative", zIndex:50}}>

//             <div style={{position:"absolute", left:0, top:4, width:"100%", borderRadius:4, backgroundColor:"#FFFFFF",
//             zIndex:50}} className={active ? "elevated-paper" : ""} onClick={(e)=>{e.stopPropagation()}}>
//                 <div style={{width:"100%", height:52, padding:4}}>
//                     <TextField
//                         className={"h-search-box"}
//                         placeholder={"Rechercher un contact"}
//                         style={{height:44, padding:0, width:"100%", backgroundColor:"#FFFFFF"}}
//                         disabled={this.props.disabled}
//                         InputProps={{
//                             style: {height:44, color:'#222222', backgroundColor:"#FAFAFA"},
//                         }}

//                         value={this.state.searchText}
//                         onChange={(event)=>{this.onSearchTextChanged(event.target.value)}}
//                         margin="none"
//                         variant="outlined"
//                     />
//                 </div>
//                 {active &&
//                     <div style={{width:"100%",maxHeight:300, paddingTop: active ? 4 : 0, overflow:"auto"}}>
//                         {this.state.searchResults.map((sr)=>{
//                             return(
//                                 <div style={{height:44, padding:4, paddingLeft:8, paddingRight:8, display:"flex",
//                                 flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}} key={"sr_" + sr.contact.id}
//                                 className={"hoverable-search-result"} onClick={()=>{this.onSearchResultClicked(sr)}}>

//                                     <div style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:'center'}}>

//                                         {hasAccessGeolite && sr.contact.isDisplayedOnGeolite &&
//                                         <img alt={"geolite"} style={{height:14, width:14, marginRight:4}} src={require("./../../../assets/geolite192.png")}/>
//                                         }

//                                         <p style={{color:"#222222", margin:0, flex:1, textAlign:"left", fontSize:14}}>
//                                             <strong style={{textTransform:"uppercase"}}>{sr.contact.lastName + " "}</strong>
//                                             {sr.contact.firstName}
//                                         </p>
//                                     </div>

//                                     {sr.contact.situation &&
//                                         <p style={{margin:0,marginTop:2, textAlign:"left", fontSize:12, color:'#555555', width:"100%"}}>
//                                             {sr.contact.situation}
//                                         </p>
//                                     }

//                                 </div>
//                             )
//                         })}
//                     </div>
//                 }
//             </div>

//         </div>
//     )
// }
