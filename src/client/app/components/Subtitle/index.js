import React from 'react';
import { asyncComponent } from '../../../utils/asyncComponent';

const Component = asyncComponent(() => import('./Subtitle'));
export const Subtitle = props => <Component {...props} />;
