import React, { FC } from "react";
import { Map } from "src/page-components/home/Map";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const Home: FC = () => (
  <PageWrapper mainClassName="flex flex-col gap-10 pt-25 pb-10">
    <section className="container">
      <h1>Home</h1>
      <h2>Home</h2>
      <h3>Home</h3>

      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
        consequuntur omnis ducimus odio, iste ratione rem itaque, deleniti culpa
        quae dolor, officia modi! Voluptates at, officiis cumque excepturi
        mollitia aliquid.
      </p>
    </section>

    <section className="container">
      <Map />
    </section>
  </PageWrapper>
);

export default Home;
