import React, {Component} from 'react'
import { MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import ChartList from '../Components/ChartList.js'
import '../public/style.css';
import PageNotFoundHandle from '../Components/PageNotFoundHandle.js';

class MusicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      searchTerm:''
    }
}

showAllSongs = () => { 
  this.setState({songs: JSON.parse(localStorage.getItem("SongsArray"))})
}

editSearchTerm = (e) => {
  if(e.target.value == ''){
    this.setState({
      songs: JSON.parse(localStorage.getItem("SongsArray")),
      searchTerm: e.target.value})
  } else{
      this.setState({searchTerm: e.target.value});
      this.dynamicSearch();
  }
}

dynamicSearch = () => {
  const newStateSongs = this.state.songs.filter((elem)=>{
    return elem.title.includes(this.state.searchTerm.toLowerCase());
  });
  return (newStateSongs) ? this.setState({songs: newStateSongs}): <PageNotFoundHandle/>
}

componentDidMount(){
      const urlAlbums ='https://jsonplaceholder.typicode.com/albums';
      const urlCovers ='https://jsonplaceholder.typicode.com/photos';
      var albumsData;
      const localStorageData = JSON.parse(localStorage.getItem("SongsArray"));
      if(!localStorageData){
        fetch(urlAlbums)
        .then(result => {
          if(result.ok)
          return result.json();
        })
        .then(data => {

          albumsData = data;
          return fetch(urlCovers)
              .then(result => {
                    if(result.ok)
                    return result.json();
              })
        })
        .then(songsList => {
          this.setState({songs: songsList})
          //To Store every song and Id in Local Storage
          // songsList.map((arrElem) => {
          //   this.getDataInStorage(arrElem);
          // });        
          window.localStorage.setItem("SongsArray", JSON.stringify(songsList));
        })
      } else {
        this.setState({songs: localStorageData})
      }
    }

    getDataInStorage = (response) => {
     // window.localStorage.setItem(response.id, JSON.stringify(response));
      window.localStorage.setItem(response.id, JSON.stringify(response));
        // this.setState({songs: response});
    }

  render(){
    return (
      <div id="mainWrapper">
          {/* <button className='cart-btn' disabled = {false}
            onClick={()=>{console.log("functioncall")}}>
           <p className='align-self-center font-weight-bold'>All Songs</p>
          </button>

          <button className='cart-btn' disabled = {false}
            onClick={()=>{console.log("functioncall")}}>
           <p className='align-self-center font-weight-bold'>My Playlists</p>
          </button> */}
          <button type="button" class="btn btn-primary btn-lg" onClick={this.showAllSongs}>All Songs</button>
          <button type="button" class="btn btn-primary btn-lg">Playlists</button>
        <MDBCol md="6">
           <div className="input-group md-form form-sm form-1 pl-0">
            <div className="input-group-prepend">
              <span className="input-group-text purple lighten-3" id="basic-text1">
                <MDBIcon className="text-white" icon="search" />
              </span>
            </div>
            <input className="form-control my-0 py-1" type="text" id="searchBox" value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for your Song...'/>
          <button onClick={this.dynamicSearch}>Search</button>
          </div>
        </MDBCol>
        <ChartList songs={this.state.songs}/>
      </div>
    )
  }

}
// const StyleButton = Styles.button`text-transform:capitalize;
// text-shadow: 1px 1px #fff000;
// background: transparent;
// border: 0.2rem solid var(--mainBlue);`

export default MusicContainer;
