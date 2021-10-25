import mapbox from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import style from './map.module.scss';

const Map = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const route = useSelector((state) => state.order.route);

  const drawRoute = (mapItem, coordinates) => {
    mapItem.flyTo({
      center: coordinates[0],
      zoom: 15,
    });

    mapItem.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates,
          },
        },
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': '#ffc617',
        'line-width': 8,
      },
    });
  };

  useEffect(() => {
    mapbox.accessToken = 'pk.eyJ1IjoiZHltb3Zjb20iLCJhIjoiY2t1cWxrMmw2MGIydjJvbDB2dXRtY2Z4aSJ9.Plf4CxkXsdGCB7HQSsbe3A';
    setMap(
      new mapbox.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v9',
        center: [30.3056504, 59.9429126],
        zoom: 12,
        attributionControl: false,
      }),
    );
    return () => setMap(null);
  }, []);

  useEffect(() => {
    if (map) {
      if (route.length > 0) {
        drawRoute(map, route);
      } else if (map.getLayer('route')) {
        map.removeLayer('route');
        map.removeSource('route');
        map.flyTo({
          center: [30.3056504, 59.9429126],
          zoom: 12,
        });
      }
    }
  }, [route, map]);

  return (
    <div className={style.map__wrapper}>
      <div className={style.map} ref={mapContainer} />
    </div>
  );
};

export default Map;
