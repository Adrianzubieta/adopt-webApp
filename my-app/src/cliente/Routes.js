import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'

export default () =>
    <Fragment>
        <Route path="/" component={Home} />
    </Fragment>