import React from 'react';
import ReactDOM from 'react-dom';
import HackerNewsCard from './HackerNewsCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HackerNewsCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});