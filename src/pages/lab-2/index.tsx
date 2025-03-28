import React, { FC } from "react";
import { PopupDetail } from "src/page-components/lab-2/PopupDetail";
import { LabDescription } from "src/components/LabDescription";
import { LAB_2 } from "src/components/LabDescription/constants";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { Map } from "src/components/Map";
import { IndustrialFacilities } from "src/components/Map/constants";
import { Notice } from "src/components/Notice";

const Lab2: FC = () => (
  <PageWrapper mainClassName="pt-25 pb-10">
    <section className="container flex flex-col gap-10">
      <Notice />
      <LabDescription {...LAB_2} />
      <Map industrialFacilities={IndustrialFacilities} content={PopupDetail} />
    </section>
  </PageWrapper>
);

export default Lab2;
