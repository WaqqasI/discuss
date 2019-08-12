import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
// import svgURL from 'assets/logo.svg'
// import {trace} from 'logger'
// import { test } from 'shared/types/test'
import {ThemeProvider} from "./components/subComponents/ThemeProvider";


const Application = () => <ThemeProvider> <App/> </ThemeProvider>;

ReactDOM.render(<Application />, document.getElementById('root'));