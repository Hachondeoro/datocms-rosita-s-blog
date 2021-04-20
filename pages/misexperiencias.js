import React from "react";
import Layout from "../components/layout";
import Container from "../components/container";

const Misexperiencias = () => {
  return (
    <>
      <Layout>
        <div className="navbarSpacer">
          <Container>
            <div>
              <section className="content-section">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-9">
                      <div className="section-title">
                        <figure>
                          <img src="images/title-shape.png" alt="Image" />
                        </figure>
                        <h6>DON’T MISS THE OPPORTUNITY</h6>
                        <h2>Upcoming Events</h2>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                      <div
                        className="exhibition-box"
                        data-scroll
                        data-scroll-speed="-1"
                      >
                        <figure>
                          {" "}
                          <a href="#">
                            <img
                              src="images/event01.jpg"
                              alt="Image"
                              className="img"
                            />
                          </a>
                          <div className="info">
                            <figure className="i">
                              <img src="images/icon-info.png" alt="Image" />
                            </figure>
                            <span>50% off exhibitions</span>{" "}
                          </div>
                        </figure>
                        <div className="content-box">
                          <h4>
                            <a href="#">
                              Artemisia Gentileschi talk with Maria
                            </a>
                          </h4>
                          <p> 15 August – 31 October 2020 </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div
                        className="exhibition-box"
                        data-scroll
                        data-scroll-speed="1"
                      >
                        <figure>
                          {" "}
                          <a href="#">
                            <img
                              src="images/event02.jpg"
                              alt="Image"
                              className="img"
                            />
                          </a>
                          <div className="info">
                            <figure className="i">
                              <img src="images/icon-info.png" alt="Image" />
                            </figure>
                            <span>50% off exhibitions</span>{" "}
                          </div>
                        </figure>
                        <div className="content-box">
                          <h4>
                            <a href="#">
                              Arctic culture and climate Exhibition
                            </a>
                          </h4>
                          <p> 22 Oct 2020 - 21 Feb 2021</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div
                      className="exhibition-box"
                      data-scroll
                      data-scroll-speed="-0.5"
                    >
                      <figure>
                        {" "}
                        <a href="#">
                          <img
                            src="images/event03.jpg"
                            alt="Image"
                            className="img"
                          />
                        </a>
                        <div className="info">
                          <figure className="i">
                            <img src="images/icon-info.png" alt="Image" />
                          </figure>
                          <span>50% off exhibitions</span>{" "}
                        </div>
                      </figure>
                      <div className="content-box">
                        <h4>
                          <a href="#">
                            Thomas Becket murder and the making of a saint
                          </a>
                        </h4>
                        <p> 22 Apr 2021 - 22 Aug 2021</p>
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      {" "}
                      <a href="#" className="custom-button">
                        VIEW ALL UPCOMING EVENTS
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Misexperiencias;
