import React from 'react';
import { asyncComponent } from '../../../utils/asyncComponent';

const Component = asyncComponent(() => import('./Header'));
export const Header = props => <Component {...props} />;
