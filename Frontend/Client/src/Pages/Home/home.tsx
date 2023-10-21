import React from 'react';
import Featured from '../../Components/Featured/Featured';
import FeaturedProperties from '../../Components/FeaturedProperty/FeaturedProperty';
import Header from '../../Components/header/Header';
import MailList from '../../Components/mailList/MailList';
import Navbar from '../../Components/Navbar/Navbar';
import PropertyList from '../../Components/propertylist/Propertylist';
import Footer from '../../Components/Footer/Footer'
import './home.css';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
 