import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  useEffect(() => {
    const scriptNavbar = document.createElement("script");
    scriptNavbar.src = "/static/js/scriptNavbar.js";
    document.body.appendChild(scriptNavbar);
  }, []);

  return (
    <div>
      <aside className="side-widget">
        <svg viewBox="0 0 600 1080" preserveAspectRatio="none" version="1.1">
          <path d="M540,1080H0V0h540c0,179.85,0,359.7,0,539.54C540,719.7,540,899.85,540,1080z"></path>
        </svg>
        {/* <figure>
          {" "}
          <img src="/imagesrosa/logo2.png" alt="Image" height="300px" style={{opacity:1}}/>{" "}
        </figure> */}

        <div className="inner">
          <div className="widget">
            <figure>
              <img src="imagesrosa/rosaprofile.png" alt="Image" />
            </figure>
            <p>
              ¡Hola! Mi nombre es María Rosa. Soy venezolana y te doy
              la bienvenida a mi website.
            </p>
          </div>
          <div className="widget">
            <h6 className="widget-title">Mis datos </h6>
            <p>
              Email: mariarodner@gmail.com<br></br>
              Whatsapp: +61 475 038 268<br></br>
              Teléfono: +61 460 934 249<br></br>
            </p>
          </div>
        </div>

        <div className="display-mobile">
          <Link href="/">
            <a>
              {" "}
              <img
                src="/imagesrosa/logo4.png"
                alt="Image"
                width="250px"
                className="mobileLogo"
              />
            </a>
          </Link>
          <div className="site-menu">
            <ul>
              <li>
                <Link href="/myblog">
                  <a>Artículos</a>
                </Link>
              </li>
              <li>
                <Link href="/acercademi">
                  <a>Sobre mí</a>
                </Link>
              </li>
              <li>
                <Link href="/comunidad">
                  <a>Comunidad</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <nav className="navbar">
        <Link href="/">
          <a>
            {" "}
            <img
              src="/imagesrosa/logo4.png"
              alt="Image"
              className="imageBanner"
            />{" "}
          </a>
        </Link>

        <div className="site-menu">
          <ul>
            <li>
              <Link href="/myblog">
                <a>Artículos</a>
              </Link>
            </li>
            <li>
              <Link href="/acercademi">
                <a>Sobre mí</a>
              </Link>
            </li>
            <li>
              <Link href="/comunidad">
                <a>Comunidad</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-button">
          {" "}
          <a><p>Contáctame</p></a>
        </div>
        <div className="hamburger-menu">
          <svg className="hamburger" width="30" height="30" viewBox="0 0 30 30">
            <path className="line line-top" d="M0,9h30" />
            <path className="line line-center" d="M0,15h30" />
            <path className="line line-bottom" d="M0,21h30" />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
