import React from 'react';
import Loadable from 'react-loadable';

const Component = Loadable({loader: () => import('./Title'), loading: () => <div>Loading...</div>});
export const Title = props => <Component {...props} />;
