import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head';
import * as parkData from 'assets/data-demo/list-pos.json'
import * as viettelData from 'assets/data-demo/viettel.json'

const L = dynamic(() => import('leaflet'), {
  ssr: false
});
const Map = dynamic(() => import('react-leaflet/lib/Map'), {
  ssr: false
});
const TileLayer = dynamic(() => import('react-leaflet/lib/TileLayer'), {
  ssr: false
});
const Marker = dynamic(() => import('react-leaflet/lib/Marker'), {
  ssr: false
});
const Popup = dynamic(() => import('react-leaflet/lib/Popup'), {
  ssr: false
});

const MapComponent = () => {
  const [lat, setLat] = useState(21.028280)
  const [lng, setLng] = useState(105.853882)
  const [zoom, setZoom] = useState(13)

  const position = [lat, lng]
 
  const isLatitude = (lat) => {      
    return isFinite(lat) && Math.abs(lat) <= 90
  }
  
  const isLongitude = (lng) => {        
    return isFinite(lng) && Math.abs(lng) <= 180
  }

  const slicePos = parkData.POS.slice(2600, 3000);
  
  const showMap = slicePos.map((post, index) => 
    {            
      if (isLatitude(post['LATITUDE']) && isLongitude(post['LONGITUDE'])) {        
        return <Marker
          key={index}           
          position={[post['LATITUDE'], post['LONGITUDE']]}
        >
          <Popup>
            <h4>{post['POSNAME']}</h4>
            POSCODE: {post['POSCODE']} <br />
            Địa chỉ: {post['ADDRESS']} <br /> Điện Thoại: {post['TEL']}
          </Popup>
        </Marker>
      }      
    }          
  )

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin="" />
      </Head>
      <Map center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />        
        {showMap}
      </Map>           
    </>
  )
}

export default MapComponent
