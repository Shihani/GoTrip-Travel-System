import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import About from './About';


class Supplier extends Component {
  render() {
    return (
        <Router>
            <div className=" d-flex h-100 flex-column">
              <Header/>
              <section>
              <Route path="/supplier" exact exact component={Home}/>
                <Route path="/supplier/About-Us" exact component={About}/>
              </section>
              <Footer/>
            </div>
        </Router>
    );
  }
}

export default Supplier;
