import React, { useEffect, useState } from "react";
import Container from "../components/container";
import Home from "../components/home";
import Layout from "../components/layout";



export default function Index() {

  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "/static/js/scripts.js";
    document.body.appendChild(scriptTag);
  }, []);


  return (
    <>
      <Layout>
        <Container>
          <Home />
        </Container>
      </Layout>
    </>
  );
}
