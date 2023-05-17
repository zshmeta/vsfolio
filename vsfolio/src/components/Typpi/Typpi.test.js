import React from 'react';
import ReactDOM from 'react-dom';
import Typpi from './Typpi';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Typpi />, div);
  ReactDOM.unmountComponentAtNode(div);
});