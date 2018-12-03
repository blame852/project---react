import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer"
class App extends Component {
  render() {
    return (
      <div className="App">
         <section>
             {this.props.children}
         </section>
         <Footer></Footer>
      </div>
    );
  }
}

export default App;
