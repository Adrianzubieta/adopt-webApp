import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Page from './cliente/layout/Page';

export default () =>
    <Fragment>
        <Route path='/:path*' component={Page} />
    </Fragment>