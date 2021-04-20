import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import { renderMetaTags } from "react-datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";

const Acercademi = () => {
  return (
    <>
      <Layout>
        <div className="navbarSpacer">
          <Container>
            <div>
              <section className="content-section" data-background="#fffbf7">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-12">
                      <div className="section-title text-center">
                        <h2>
                          María Rosa Rodner <br></br>
                          <p className="regularFont">
                            Antropóloga, Trabajadora Juvenil, Facilitadora y
                            Comunicadora Social{" "}
                          </p>
                        </h2>
                      </div>
                    </div>

                    <div className="col-lg-7">
                      {" "}
                      <img src="imagesrosa/rosaprofile.png" alt="Image" />{" "}
                    </div>

                    <div className="col-lg-5">
                      <div className="side-icon-list right-side">
                        <ul>
                          <li>
                            <figure>
                              {" "}
                              <img src="images/icon04.png" alt="Image" />{" "}
                            </figure>
                            <div className="content">
                              <h5>PERFIL</h5>
                              <p>
                                Comprometida y dedicada al desarrollo juvenil y
                                comunitario de forma creativa y efectiva,
                                tomando en cuenta la diversidad cultural y
                                social. Con veinte años de experiencia
                                trabajando en medios de comunicación y ocho años
                                trabajando en programas socio-educativos,
                                recreativos y de reintegración, busco combinar
                                la comunicación con la antropología para diseñar
                                actividades que capaciten y empoderen a los
                                jóvenes, enfocado en el propósito personal y la
                                productividad social.
                              </p>
                            </div>
                          </li>
                          <li>
                            <figure>
                              {" "}
                              <img src="images/icon04.png" alt="Image" />{" "}
                            </figure>
                            <div className="content">
                              <h5>CAPACIDADES</h5>
                              
                              <p>Creación y facilitación de talleres</p>
                              <p>Entrevistas, redacción y reportes</p>
                              <p>Word, Power Point, Excel</p>
                              <p>Fotografía y video</p>
                              
                            </div>
                          </li>
                          
                        </ul>
                      </div>
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

export default Acercademi;
