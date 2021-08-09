import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Num extends React.Component {
  render() {
    return <h2>Square: {Math.pow(this.props.no, 2) }</h2>;
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Num no="2"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
