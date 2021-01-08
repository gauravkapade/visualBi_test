import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import AllSongs from './Components/allSongs';

class App extends Component {
    render() {
        return (
            <AllSongs allSongs={this.state.allSongs} />
        )
    }

    state = {
        allSongs: []
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then((data) => {
                this.setState({ allSongs: data })
            })
            .catch(console.log)
    }
}

export default App;
