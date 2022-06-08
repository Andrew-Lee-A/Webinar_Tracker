// React Library
import React from 'react';

// JavaScript files
import GlobalStyle from '../../components/Home/GlobalStyle';
import NavBar from '../../components/Home/NavBar';
import HeadPage from '../../components/Home/HeadPage';
import Features from '../../components/Home/Features';
import Quality from '../../components/Home/Quality';
import Footer from '../../components/Home/Footer';
// import Crew from '../../components/Home/Crews';

export default function HomeIndex() {
  return (
    <>
        <GlobalStyle />
        <NavBar />
        <HeadPage />
        <Features/>
        <Quality/>
        {/* <Crew /> */}
        <Footer/>
    </>
  )
}


