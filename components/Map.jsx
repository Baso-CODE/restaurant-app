"use client";

import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const markers = [
  {
    position: [-5.147665, 119.432731], // Makassar
    title: "Makassar",
    subtitle: "Warung Baso Food yang terletak di CPI",
    image: "/map/1.png",
  },
  {
    position: [-3.533391, 119.991114], // Wajo
    title: "Wajo",
    subtitle: "Warung Baso Food yang terletak di Pasar Doping",
    image: "/map/2.png",
  },
  {
    position: [-3.018305, 120.202174], // Palopo
    title: "Palopo",
    subtitle: "Warung Baso Food yang terletak di Lapangan Pancasila",
    image: "/map/3.png",
  },
];
const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});

const Map = () => {
  useEffect(() => {
    const { Icon } = require("leaflet");
    delete Icon.Default.prototype._getIconUrl;
    Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
      iconUrl: require("leaflet/dist/images/marker-icon.png").default,
      shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
    });
  }, []);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className=" relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20">
      <MapContainer
        center={[-4.550051, 120.200103]}
        zoom={isMobile ? 10 : 12}
        className={`${isMobile ? "h-[300px]" : "h-[900px]"} z-10`}
        zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={customIcon}>
            <Popup>
              <div className=" flex gap-x-[30px]">
                <div className=" flex-1">
                  <h3>{marker.title}</h3>
                  <p className=" leading-snug">{marker.subtitle}</p>
                </div>
                <div className=" flex-1">
                  <img
                    src={marker.image}
                    width={130}
                    height={160}
                    alt="image restoran"
                  />
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </motion.section>
  );
};

export default Map;
