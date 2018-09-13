import React, { Component } from 'react';
import './App.css';

import { Header } from './components/Header';
import { Button } from './components/Button';
import { Subtitle } from './components/Subtitle';
import { Title } from './components/Title';

class App extends Component {
  state = {
    useTitle: true
  };

  changeSize = () => {
    console.log('change');
    this.setState(state => ({
      useTitle: !state.useTitle
    }));
  };

  render() {
    const { useTitle } = this.state;
    const text = 'Hello Don Pepito';
    console.log(useTitle);
    return (
      <div className="App">
        <Header />
        <div className="pd-vertical App-text">
          {useTitle ? <Title>{text}</Title> : <Subtitle>{text}</Subtitle>}
        </div>
        <div className="pd-vertical">
          <Button onClick={this.changeSize}>Change Size</Button>
        </div>
      </div>
    );
  }
}

export default App;
