import React, { FC } from "react";
import { Marker, Popup } from "react-leaflet";
import { PopupDetail } from "src/page-components/lab-1/PopupDetail";
import { LabDescription } from "src/components/LabDescription";
import { LAB_1 } from "src/components/LabDescription/constants";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { Map } from "src/components/Map";
import { INDUSTRIAL_FACILITIES_LAB_1 } from "src/components/Map/constants";

const Lab1: FC = () => (
  <PageWrapper mainClassName="pt-25 pb-10">
    <section className="container flex flex-col gap-10">
      <LabDescription {...LAB_1} />

      <Map>
        <>
          {INDUSTRIAL_FACILITIES_LAB_1.map((marker) => (
            <Marker key={marker.id} position={marker.position}>
              <Popup>
                <PopupDetail {...marker} />
              </Popup>
            </Marker>
          ))}
        </>
      </Map>
    </section>
  </PageWrapper>
);

export default Lab1;
