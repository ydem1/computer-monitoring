import React, { FC } from "react";
import { Map } from "src/page-components/home/Map";
import { LabDescription } from "src/components/LabDescription";
import { LAB_1 } from "src/components/LabDescription/constants";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const Lab1: FC = () => (
  <PageWrapper mainClassName="pt-25 pb-10">
    <section className="container flex flex-col gap-10">
      <LabDescription {...LAB_1} />
      <Map />
    </section>
  </PageWrapper>
);

export default Lab1;
