import React from 'react';
import ReactDOM from 'react-dom';
import Ui from './Ui';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ui />, div);
  ReactDOM.unmountComponentAtNode(div);
});