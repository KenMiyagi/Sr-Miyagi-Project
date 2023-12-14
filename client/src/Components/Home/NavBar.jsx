import React, { useState } from "react";
/* import style from "./NavBar.module.css"; */
import { Link, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation().pathname;
  console.log(location);
  console.log(location === "/");

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid" style={{height:"100%"}}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <RouterLink className="navbar-brand " to="/">
          Feria del Sr Miyagi
        </RouterLink>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {location === "/" ? (
                <ScrollLink
                  style={{ cursor: "pointer" }}
                  className="nav-link active cursor-pointer"
                  activeClass="active"
                  to="our-services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  //BOOTSTRAP
                  aria-current="page"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  Servicios
                </ScrollLink>
              ) : (
                <RouterLink
                  to="/"
                  style={{ cursor: "pointer" }}
                  className="nav-link active cursor-pointer"
                  aria-current="page"
                  /* data-bs-toggle="collapse" (SI SE DESCOMENTA NO FUNCIONAN LOS LINKS)*/
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  Servicios
                >
                  Servicios
                </RouterLink>
              )}
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Inscripciones
              </a>
            </li>
            <li className="nav-item">
              <ScrollLink
                style={{ cursor: "pointer" }}
                className="nav-link active cursor-pointer"
                activeClass="active"
                to="location"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                //BOOTSTRAP
                aria-current="page"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Ubicación
              </ScrollLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Mas acciones
              </a>
              <ul className="dropdown-menu">
                <li>
                  <RouterLink
                    to="/Inscripcion"
                    className="dropdown-item"
                    /* data-bs-toggle="collapse" (SI SE DESCOMENTA NO FUNCIONAN LOS LINKS)*/
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    Inscripciones
                  </RouterLink>
                </li>
                <li>
                  <RouterLink className="dropdown-item" to="about-us">
                    Sobre nosotros
                  </RouterLink>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Noticias
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <RouterLink
                    to="/faq"
                    className="dropdown-item"
                    /* data-bs-toggle="collapse" (SI SE DESCOMENTA NO FUNCIONAN LOS LINKS)*/
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    Preguntas frecuentes
                  </RouterLink>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=3142219525",
                  "_blank"
                )
              }
              /* data-bs-toggle="collapse" */
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Contacto
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
