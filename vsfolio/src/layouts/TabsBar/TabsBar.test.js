import React from 'react';
import ReactDOM from 'react-dom';
import TabsBar from './TabsBar';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TabsBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});