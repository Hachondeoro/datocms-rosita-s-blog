import React, { useEffect, useState } from "react";
// import Myblog from "@components/myblog";
import Link from "next/link";

const Home = () => {
  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "/static/js/scripts.js";
    document.body.appendChild(scriptTag);
  }, []);
  return (
    <div>
      <div className="preloader" id="preloader">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="none" version="1.1">
          <path d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,0 Z"></path>
        </svg>
        <div className="inner">
          <canvas
            className="progress-bar"
            id="progress-bar"
            width="200"
            height="200"
          ></canvas>
          <figure>
            <img src="images/preloader.png" alt="Image" />
          </figure>
          <small>Loading</small>{" "}
        </div>
      </div>

      <div className="page-transition">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="none" version="1.1">
          <path d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,980 1294.66667,930 960,930 C625.333333,930 305.333333,980 0,1080 L0,0 Z"></path>
        </svg>
      </div>

      <div className="smooth-scroll">
        <div className="section-wrapper" data-scroll-section>
          <div className="search-box">
            <div className="container">
              <div className="form">
                <h3>SEARCH EVENT</h3>
                <input type="search" placeholder="What are you looking for ?" />
                <input type="submit" value="SEARCH" />
              </div>

              <div className="search-events">
                <ul>
                  <li>
                    <h5>
                      <a href="#">Artemisia Gentileschi talk with Maria</a>
                    </h5>
                    <small>15 August – 31 October 2020</small>{" "}
                  </li>
                  <li>
                    <h5>
                      <a href="#">Artemisia Gentileschi talk with Maria</a>
                    </h5>
                    <small>15 August – 31 October 2020</small>{" "}
                  </li>
                  <li>
                    <h5>
                      <a href="#">Artemisia Gentileschi talk with Maria</a>
                    </h5>
                    <small>15 August – 31 October 2020</small>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <header>
            <div className="slider">
              <div className="swiper-container slider-images">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="mobile-slide"></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="mobile-slide"></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="mobile-slide"></div>
                  </div>
                </div>

                <div className="container-fluid slider-nav">
                  <div className="swiper-pagination"></div>

                  <div className="swiper-fraction"></div>

                  <div className="button-prev">
                    <i className="far fa-chevron-down"></i>
                  </div>

                  <div className="button-next">
                    <i className="far fa-chevron-up"></i>
                  </div>
                </div>
              </div>

              <div className="swiper-container slider-texts">
                {/* <svg width="580" height="400" className="svg-morph"> */}
                <svg width="150" height="800" className="svg-morph">
                
                  <path
                    id="svg_morph"
                    d="m261,30.4375c0,0 114,6 151,75c37,69 37,174 6,206.5625c-31,32.5625 -138,11.4375 -196,-19.5625c-58,-31 -86,-62 -90,-134.4375c12,-136.5625 92,-126.5625 129,-127.5625z"
                  />
                </svg>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="container-fluid">
                      <h1>
                        Jovenes <br></br>
                        Tripulantes{" "}
                      </h1>
                      <p>por María Rosa Rodner </p>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="container-fluid">
                      <h1>
                        Sobre mí <br></br>
                      </h1>
                      <p>Conoce mas sobre mi pasado</p>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="container-fluid">
                      <h1>Mis Experiencias</h1>
                      <p>Todo lo que he vivido hasta ahora</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <img
                src="imagesrosa/rosaprofile.png"
                width="50%"
                alt="img"
                classNameName="profileImage"
              /> */}
              <div className="play-now">
                {" "}
                <a
                  href="https://www.youtube.com/watch?v=8yeyJK9E4I4"
                  data-fancybox
                  data-width="640"
                  data-height="360"
                  className="play-btn"
                ></a>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="300px"
                  height="300px"
                  viewBox="0 0 300 300"
                  enableBackground="new 0 0 300 300"
                  xmlSpace="preserve"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    />
                  </defs>
                  <circle cx="150" cy="100" r="75" fill="none" />
                  <g>
                    <use xlinkHref="#circlePath" fill="none" />
                    <text>
                      <textPath xlinkHref="#circlePath">
                        PLAY NOW - PLAY NOW - PLAY NOW -
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </header>

          {/* <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <h6 className="widget-title">About Museum</h6>
                  <ul className="footer-menu">
                    <li>
                      <a href="#">About us </a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">National work</a>
                    </li>
                    <li>
                      <a href="#">International work</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 col-md-6">
                  <h6 className="widget-title">Connect Us</h6>
                  <ul className="social-media">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i> /wandau-uk
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i> /wandau-museum
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i> /wandau-tv
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4">
                  <h6 className="widget-title">Visit Us Now</h6>
                  <address className="address">
                    Cromwell Road New Town SW7 <strong>London - England</strong>{" "}
                    <i className="fas fa-info-circle"></i> +44 (0)20 7942 2000
                  </address>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="container">
                {" "}
                <span className="copyright">
                  © 2021 Wandau | Art & History Museum
                </span>{" "}
                <span className="creation">
                  Site created by <a href="#">themezinho</a>
                </span>{" "}
              </div>
            </div>
          </footer> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
