// export * from './Subtitle'
import React, { Component } from 'react';

export function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    state = { component: null };
    componentDidMount() {
      importComponent().then(cmp => {
        this.setState({ component: cmp.default });
      });
    }
    render() {
      const { component: Cmp } = this.state;
      return Cmp ? <Cmp {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}
