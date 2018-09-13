import React from 'react';
import Loadable from 'react-loadable';

const Component = Loadable({loader: () => import('./Button'), loading: () => <div>Loading...</div>});
export const Button = props => <Component {...props} />;
