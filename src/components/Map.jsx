import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAlbersUsa"  // ✅ U.S. Projection
      projectionConfig={{
        scale: 1000,  // ✅ Properly scales the map
      }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Load U.S. State Boundaries */}
      <Geographies geography="https://cdn.jsdelivr.net/npm/us-atlas/states-10m.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#2C065D"  // Dark Blue for the U.S.
              stroke="#FFFFFF"
              strokeWidth={0.5}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default Map;
