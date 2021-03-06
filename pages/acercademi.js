import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import { renderMetaTags } from "react-datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import { request } from "../lib/datocms";
import { StructuredText } from "react-datocms";

const MYQUERY = `query MyQuery {
  acercademi {
    title
    subtitle
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

const Acercademi = ({ data }) => {
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
                          {data.acercademi.title} <br></br>
                          <p className="regularFont">
                            {data.acercademi.subtitle}{" "}
                          </p>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="datoCMS">
                  <StructuredText
                    data={data.acercademi.content}
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

export default Acercademi;
