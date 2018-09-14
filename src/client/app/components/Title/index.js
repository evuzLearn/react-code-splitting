import React from 'react';
import Loadable from 'react-loadable';

const Component = Loadable({
  loader: () => import(/* webpackChunkName: "title.cmp" */ './Title'),
  loading: () => <div>Loading...</div>,
  modules: ['title.cmp']
});
export const Title = props => <Component {...props} />;
