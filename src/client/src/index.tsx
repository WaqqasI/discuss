import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import _ from 'lodash/fp';
import svgURL from 'assets/logo.svg'
import {trace} from 'logger'
import { test } from 'shared/types/test'

_.flow(console.log, trace)(svgURL)
console.log(test)

ReactDOM.render(<App />, document.getElementById('root'));