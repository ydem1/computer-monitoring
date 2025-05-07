import React, { FC, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { PopupDetail } from "src/page-components/lab-3/PopupDetail";
import { LabDescription } from "src/components/LabDescription";
import { LAB_3 } from "src/components/LabDescription/constants";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { Map } from "src/components/Map";
import { INDUSTRIAL_FACILITIES_LAB_3 } from "src/components/Map/constants";
import { MapSelectDropdownList } from "src/components/MapSelectDropdownList";
import { MAPS_OPTIONS } from "src/components/MapSelectDropdownList/constants";

const Lab3: FC = () => {
  const [activeOption, setActiveOption] = useState(MAPS_OPTIONS[0]);

  const industrialFacilitiesCurrent = INDUSTRIAL_FACILITIES_LAB_3.filter(
    (item) => {
      if (activeOption.value === 0) {
        return true;
      }

      return item.monitoringSubsystem === activeOption.value;
    }
  );

  return (
    <PageWrapper mainClassName="pt-25 pb-10">
      <section className="container flex flex-col gap-10">
        <LabDescription {...LAB_3} />

        <div className="flex flex-col items-end gap-2">
          <MapSelectDropdownList
            options={MAPS_OPTIONS}
            activeOption={activeOption}
            setOption={setActiveOption}
          />

          <Map>
            <>
              {industrialFacilitiesCurrent.map((marker) => (
                <Marker key={marker.id} position={marker.position}>
                  <Popup>
                    <PopupDetail {...marker} />
                  </Popup>
                </Marker>
              ))}
            </>
          </Map>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Lab3;
