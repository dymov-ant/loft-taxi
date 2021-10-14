import mapbox from "mapbox-gl"
import React, { useEffect, useRef, useState } from "react"
import style from "./map.module.scss"

const Map = () => {
  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)

  useEffect(() => {
    mapbox.accessToken = "pk.eyJ1IjoiZHltb3Zjb20iLCJhIjoiY2t1cWxrMmw2MGIydjJvbDB2dXRtY2Z4aSJ9.Plf4CxkXsdGCB7HQSsbe3A"
    setMap(new mapbox.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v9",
      center: [30.3056504, 59.9429126],
      zoom: 12,
      attributionControl: false
    }))

    return () => setMap(null)
  }, [])

  return (
    <div className={style.map__wrapper}>
      <div className={style.map} ref={mapContainer}/>
    </div>
  )
}

export default Map
