import React,{Component} from 'react';
import axios from 'axios';
import ImageResults from '../imageResults/ImageResults';
import '../search/Search.css'
class Search extends Component{
    state={
        searchText:'',
        apiUrl:'https://pixabay.com/api',
        apiKey:'34818484-b5819b4e8892293a6985a8813',
        images:[]
    };
    // function to change text fat arrow function.In this name should always be searchText
    onTextChange=(e)=>{
        this.setState({[e.target.name]:e.target.value},()=>{
        if(e.target.value=''){
            this.setState({images:[]});
        }
        else{
            axios.get( `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                this.state.searchText
            }&image_type=photo&safesearch=true`).then((res)=>{
                this.setState({images:res.data.hits});
            }).catch((err)=>{
                console.log(err);
            })
        }
    });
 }
    render(){
        console.log(this.state.images);
        return(
        <div>
        <input type="text" placeholder="Search for images"
        name="searchText"
        value={this.state.searchText}
        onChange={this.onTextChange}
        />  <i class="fas fa-search"></i>
    <br/>    
    {this.state.images.length>0?(<ImageResults images={this.state.images}/>):null}
        </div>
        )
    }
}
export default Search;