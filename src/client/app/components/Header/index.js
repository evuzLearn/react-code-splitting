import React from 'react';
import Loadable from 'react-loadable';

const Component = Loadable({loader: () => import('./Header'), loading: () => <div>Loading...</div>});
export const Header = props => <Component {...props} />;
