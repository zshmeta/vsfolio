import React from 'react';
import ReactDOM from 'react-dom';
import Tippy from './Tippy';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tippy />, div);
  ReactDOM.unmountComponentAtNode(div);
});