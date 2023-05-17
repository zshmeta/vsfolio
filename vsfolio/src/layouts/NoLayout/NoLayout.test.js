import React from 'react';
import ReactDOM from 'react-dom';
import NoLayout from './NoLayout';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoLayout />, div);
  ReactDOM.unmountComponentAtNode(div);
});