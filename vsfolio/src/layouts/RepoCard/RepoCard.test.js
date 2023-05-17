import React from 'react';
import ReactDOM from 'react-dom';
import RepoCard from './RepoCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RepoCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});