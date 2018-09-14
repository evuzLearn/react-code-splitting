import React from 'react';
import Loadable from 'react-loadable';

const Component = Loadable({
  loader: () => import(/* webpackChunkName: "subtitle.cmp" */ './Subtitle'),
  loading: () => <div>Loading...</div>,
  modules: ['subtitle.cmp']
});
export const Subtitle = props => <Component {...props} />;
