import React from 'react';
import ReactDOM from 'react-dom';
import Explorer from './Explorer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Explorer />, div);
  ReactDOM.unmountComponentAtNode(div);
});