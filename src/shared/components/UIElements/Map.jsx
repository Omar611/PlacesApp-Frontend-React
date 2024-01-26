import React, { useRef, useEffect } from "react";
import MapOl from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

import "ol/ol.css";
import "./Map.css";

const Map = (props) => {
	const mapRef = useRef();
	const mapInstanceRef = useRef();

	const { center, zoom } = props;
	useEffect(() => {
		if (!mapInstanceRef.current) {
			mapInstanceRef.current = new MapOl({
				target: mapRef.current.id,
				layers: [
					new TileLayer({
						source: new OSM(),
					}),
				],
				view: new View({
					center: fromLonLat([center.lng, center.lat]),
					zoom: zoom,
				}),
			});
		} else {
			// Update the map center and zoom level
			mapInstanceRef.current
				.getView()
				.setCenter(fromLonLat([center.lng, center.lat]));
			mapInstanceRef.current.getView().setZoom(zoom);
		}
	}, [center, zoom]);

	return (
		<div
			ref={mapRef}
			className={`map ${props.className}`}
			style={props.style}
			id="map"></div>
	);
};

export default Map;
