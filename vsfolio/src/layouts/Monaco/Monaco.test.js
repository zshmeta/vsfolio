import React from 'react';
import ReactDOM from 'react-dom';
import Monaco from './Monaco';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Monaco />, div);
  ReactDOM.unmountComponentAtNode(div);
});