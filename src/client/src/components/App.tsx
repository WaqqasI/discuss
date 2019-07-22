import React from 'react';
import 'main.css';
import { Counter } from './Counter';
import { Hello } from './Hello';
import { Greet } from './Greet'

export const App = () => (
  <>
    <Hello name={ 'react-webpack-typescript-babel' } />
    <Counter />
    <Greet />
  </>
);
