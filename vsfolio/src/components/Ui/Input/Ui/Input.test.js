import React from 'react';
import ReactDOM from 'react-dom';
import UiInput from './UiInput';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UiInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});