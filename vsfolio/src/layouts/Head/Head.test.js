import React from 'react';
import ReactDOM from 'react-dom';
import Head from './Head';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Head />, div);
  ReactDOM.unmountComponentAtNode(div);
});