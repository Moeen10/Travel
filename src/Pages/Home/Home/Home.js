import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <br />
    <div>
    <h1 className="text-primary">Tourist</h1>
    <br />
    <div className="video">
        <span>    <iframe width="560" height="315" src="https://www.youtube.com/embed/rDYdeq3JW_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  </span>
        <span> <iframe width="560" height="315" src="https://www.youtube.com/embed/2hgJs1vlqYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></span>
    </div>
    </div>
        </div>
    );
};

export default Home;