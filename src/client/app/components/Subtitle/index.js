import React from 'react';
import Loadable from 'react-loadable';

const Component = Loadable({loader: () => import('./Subtitle'), loading: () => <div>Loading...</div>});
export const Subtitle = props => <Component {...props} />;
