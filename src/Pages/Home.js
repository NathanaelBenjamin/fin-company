import React from 'react';
import "./HomeStyles.css";
import NavBar from "../components/NavBar";
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Home = () => {
  AOS.init({
    offset: 120,
    duration: 400
  });

  //const windowWidth = window.innerWidth();

  return (
    <div className="body-container">
      <NavBar name = "nav" />

        <div className="about-us">
          <div className="about-header">
          <h3 className="header-1">
            What distinguishes us
          </h3>
          <p className="header-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ut consequatur unde quod mollitia doloribus possimus! Repellendus aliquam voluptate illum!.</p>
          </div>
          
          <div className='description-card' data-aos="slide-right">
        <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#f8d258"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M21.41,11.41l-8.83-8.83C12.21,2.21,11.7,2,11.17,2H4C2.9,2,2,2.9,2,4v7.17c0,0.53,0.21,1.04,0.59,1.41l8.83,8.83 c0.78,0.78,2.05,0.78,2.83,0l7.17-7.17C22.2,13.46,22.2,12.2,21.41,11.41z M12.83,20L4,11.17V4h7.17L20,12.83L12.83,20z"/><circle cx="6.5" cy="6.5" r="1.5"/></g></g></svg>
        </div>
        <div className="card-title">
            <h4>Profitable sales</h4>
            <p className="description-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque aspernatur nam!
            </p>
        </div>
        <button className="read-more">Read more.</button>
    </div>

    <div className='description-card' data-aos={window.innerWidth >= 1050 ? `fade-up` : `slide-left`}>
    
        <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#f8d258"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/></svg>
        </div>
        <div className="card-title">
            <h4>Safe trading</h4>
            <p className="description-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque aspernatur nam!
            </p>
        </div>
        <button className="read-more">Read more.</button>
    </div>

    <div className='description-card' data-aos="slide-right">
        <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#f8d258"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
        </div>
        <div className="card-title">
            <h4>Affordable Shares</h4>
            <p className="description-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque aspernatur nam!
            </p>
        </div>
        <button className="read-more">Read more.</button>
    </div>
          
        </div>

        <footer>
          <div className="date">© {new Date().getFullYear()}</div>

          <div className="back-to-top">
            <Link to = 'nav' smooth={true} duration={400}>Back to top.</Link>
          </div>
        </footer>
    </div>
  );
}

export default Home;