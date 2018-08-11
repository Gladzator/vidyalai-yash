import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const jsx = (
    <AppRouter />
);
let hasRendered = false;
ReactDOM.render(jsx, document.getElementById('app'));
