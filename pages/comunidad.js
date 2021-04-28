import React from "react";
import Layout from "../components/layout";
import Container from "../components/container";
import { request } from "../lib/datocms";
import { StructuredText } from "react-datocms";

const MYQUERY = `query MyQuery {
  texto {
    title
    content {
      value
      blocks{
        __typename
        ... on ImageBlockRecord {
          id
          image { url }
        }}
    }
  }
}
`;

export async function getStaticProps() {
  const data = await request({
    query: MYQUERY,
  });
  return {
    props: { data },
    revalidate: 10,
  };
}

const Misexperiencias = ({ data }) => {
  return (
    <>
      <Layout>
        <div className="navbarSpacer">
          <Container>
            <div>
              <section className="content-section">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-12">
                      <div className="section-title text-center">
                        <h2>
                          {data.texto.title} <br></br>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="datoCMS">
                    <StructuredText
                      data={data.texto.content}
                      renderBlock={({ record }) => {
                        switch (record.__typename) {
                          case "ImageBlockRecord":
                            return <img src={record.image.url} />;
                          default:
                            return null;
                        }
                      }}
                    />
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
