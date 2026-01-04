import { motion } from "framer-motion";
import maplibregl, { type LngLatLike } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { useTheme } from "./theme-provider";

const Map = () => {
  const { theme } = useTheme();

  const mapContainer = useRef<HTMLDivElement | null>(null);

  const markerLngLat: [number, number] = [
    121.03772612886411, 14.671060795700212,
  ];

  useEffect(() => {
    if (!mapContainer.current) {
      return;
    }

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style:
        theme === "light"
          ? "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
          : "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: markerLngLat,
      zoom: 14,
      attributionControl: false,
    });

    const markerElement = document.createElement("div");
    markerElement.className = "custom-marker";

    const addressElement = document.createElement("div");

    const isMarkerWithinBounds = (lngLat: LngLatLike) => {
      const bounds = map.getBounds();
      return bounds.contains(lngLat);
    };

    if (isMarkerWithinBounds(markerLngLat)) {
      new maplibregl.Marker({ element: markerElement })
        .setLngLat(markerLngLat)
        .addTo(map);

      new maplibregl.Marker({ element: addressElement, offset: [0, -50] })
        .setLngLat(markerLngLat)
        .addTo(map);
    }

    map.on("load", () => {
      map.flyTo({
        center: markerLngLat,
        zoom: 16,
        speed: 1.5,
        curve: 1,
      });

      map.once("moveend", () => {
        const root = createRoot(addressElement);
        root.render(
          <motion.div
            className="pop flex items-center justify-center space-x-2 rounded-lg border p-2 text-xs shadow-md backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ WebkitBackdropFilter: "blur(20px)" }}
          >
            <img
              src="assets/quezon-city.webp"
              alt="location"
              className="size-5 rounded-full border-2 ring-1"
              loading="lazy"
            />
            <p className="flex items-center justify-center">
              Quezon City, Metro Manila, Philippines
            </p>
          </motion.div>,
        );
      });
    });

    map.on("error", (e) => {
      console.error("Map error:", e);
    });

    return () => map.remove();
  }, [theme]);

  return (
    <div className="relative h-full w-full">
      <div ref={mapContainer} className="h-full w-full rounded" />
      <div className="from-background pointer-events-none absolute bottom-0 h-24 w-full bg-linear-to-t to-transparent"></div>
    </div>
  );
};

export default Map;
