import React, { FC } from "react";
import { EcoMeasureTable } from "src/page-components/lab-4/Table";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const Lab4: FC = () => (
  <PageWrapper mainClassName="pt-25 pb-10">
    <EcoMeasureTable />
  </PageWrapper>
);

export default Lab4;
