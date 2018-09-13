import React from 'react';
import { asyncComponent } from '../../../utils/asyncComponent';

const Component = asyncComponent(() => import('./Button'));
export const Button = props => <Component {...props} />;
