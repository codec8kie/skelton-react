import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './container/header/';
import Footer from './container/footer/';

class Routers extends Component {
  render() {
    return (
      <div>
        <Header />
        body
        <Footer />
      </div>
    );
  }
}

export default Routers;