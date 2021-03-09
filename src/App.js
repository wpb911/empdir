
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UserContainer from './components/UserContainer'
import './components/style.css'

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <UserContainer />
      <Footer />
    </div>
  );
}

export default App;