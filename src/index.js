import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const dataElements = [
  {
    assigne: 'Иванов',
    status: 'в работе',
    title: 'купить хлеб'
  },
  {
    assigne: 'Петров',
    status: 'готово',
    title: 'купить горошек'
  },
  {
    assigne: 'Сидоров',
    status: 'новый',
    title: 'купить молоко'
  },
  {
    assigne: 'Сидорович',
    status: 'готово',
    title: 'купить масло'
  },
  {
    assigne: 'Кирилов',
    status: 'новый',
    title: 'купить соль'
  },
]

ReactDOM.render(
  <React.StrictMode>
    <App dataElements={dataElements} />
  </React.StrictMode>,
  document.getElementById('root')
);
