import React, { Component } from 'react';
import './App.css';

import { Header } from './components/Header';
import { Button } from './components/Button';
import { Subtitle } from './components/Subtitle';
import { Title } from './components/Title';

class App extends Component {
  state = {
    useTitle: true,
    showHeader: false
  };

  changeSize = () => {
    console.log('Size');
    this.setState(state => ({
      useTitle: !state.useTitle
    }));
  };

  changeHeaderVisibility = () => {
    console.log('Visibility');
    this.setState(state => ({
      showHeader: !state.showHeader
    }));
  };

  render() {
    const { useTitle, showHeader } = this.state;
    const text = 'Hello Don Jose';
    return (
      <div className="App">
        {showHeader ? <Header /> : null}
        <div className="pd-vertical App-text">
          {useTitle ? <Title>{text}</Title> : <Subtitle>{text}</Subtitle>}
        </div>
        <div className="pd-vertical">
          <Button onClick={this.changeSize}>Change Size</Button>
          <Button onClick={this.changeHeaderVisibility}>Show/Hide Header</Button>
        </div>
      </div>
    );
  }
}

export default App;
