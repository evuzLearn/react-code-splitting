import React from 'react';
import Loadable from 'react-loadable';

const Component = Loadable({
  loader: () => import(/* webpackChunkName: "button.cmp" */ './Button'),
  loading: () => <div>Loading...</div>,
  modules: ['button.cmp']
});
export const Button = props => <Component {...props} />;
