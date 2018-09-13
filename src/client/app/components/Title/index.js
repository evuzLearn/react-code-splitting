import React from 'react';
import { asyncComponent } from '../../../utils/asyncComponent';

const Component = asyncComponent(() => import('./Title'));
export const Title = props => <Component {...props} />;
