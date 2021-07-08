import './App.css';
import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <h1>App</h1>
        <Header />
        <Balance />
      </div>
    </div>
  )
}

export default App

