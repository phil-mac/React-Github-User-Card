import React from 'react';
import logo from './logo.svg';
import {Container} from '@material-ui/core';

import './App.css';

import GithubUserInfo from './components/GithubUserInfo';

class App extends React.Component {
  state = {
    userName: 'phil-mac',
    userData: {
      avatar_url: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif',
      login: '-'
    },
    followers: []
  }

  componentDidMount(){
    console.log('cDM')
    this.getUserInfo(this.state.userName);
  }

  setUserName = newUserName => {
    console.log('set user name: ' + newUserName);
    this.setState({
      userName: newUserName,
      // userData: {
      //   avatar_url: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif',
      //   login: '-'
      // }
    })
    this.getUserInfo(newUserName);
  }

  getUserInfo = (newUserName) => {
    fetch(`https://api.github.com/users/${newUserName}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({
        userData: data
      })
    })
    
    fetch(`https://api.github.com/users/${newUserName}/followers`)
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
        <GithubUserInfo userData={this.state.userData} followers={this.state.followers} setUserName={this.setUserName}/>
      </Container>
    )
  }
}

export default App;
