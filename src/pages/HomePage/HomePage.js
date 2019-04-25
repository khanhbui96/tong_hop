import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Footer';


class HomePage extends Component {
  render() {
    return (
      <div className="">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
