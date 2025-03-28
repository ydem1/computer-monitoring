import React, { FC } from "react";
import { Map } from "src/page-components/home/Map";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const Home: FC = () => (
  <PageWrapper>
    <section className="container">
      <h3>Home</h3>
      <Map />
    </section>
  </PageWrapper>
);

export default Home;
