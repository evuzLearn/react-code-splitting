import React from 'react';
import Loadable from 'react-loadable';

const Component = Loadable({
  loader: () => import(/* webpackChunkName: "header.cmp" */ './Header'),
  loading: () => <div>Loading...</div>,
  modules: ['header.cmp']
});
export const Header = props => <Component {...props} />;
