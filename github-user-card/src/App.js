import React from 'react';
import logo from './logo.svg';
import {Container} from '@material-ui/core';

import './App.css';

import GithubUserInfo from './components/GithubUserInfo';

class App extends React.Component {
  state = {
    userData: {
      avatar_url: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif',
      login: '-'
    },
    followers: []
  }

  componentDidMount(){
    fetch('https://api.github.com/users/phil-mac')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({
        userData: data
      })
    })
    
    fetch('https://api.github.com/users/phil-mac/followers')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({
        followers: data
      })
    })
  }

  render(){
    return (
      <Container maxWidth='md'>
        <GithubUserInfo userData={this.state.userData} followers={this.state.followers}/>
      </Container>
    )
  }
}

export default App;
