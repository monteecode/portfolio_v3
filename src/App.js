import React from 'react'
import Header from './header_component/header'
import PortfolioContainer from './portfolio_components/PortfolioContainer'
import Nav from './nav_component/Nav'
import './App.css'

function App() {
  return (
    <main className="App">
        <Nav />
          <Header />
          <PortfolioContainer />
    </main>
  )
}

export default App;
