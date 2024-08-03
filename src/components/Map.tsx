import React, { useEffect, useMemo, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Address } from '../types/types';
import { Loader } from './shared/Loader';

import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  addresses: Address[];
  isLoading: boolean;
  selectedProfileId?: string;
}

const MapUpdater: React.FC<{ selectedAddress?: Address }> = ({ selectedAddress }) => {
  const map = useMap();

  useEffect(() => {
    if (!selectedAddress) return;
    map.flyTo([selectedAddress.latitude || 0, selectedAddress.longitude || 0], 13);
  }, [selectedAddress, map]);

  return null;
};

const Map: React.FC<MapProps> = ({ addresses, isLoading, selectedProfileId }) => {
  const selectedAddress = useMemo(
    () => addresses.find(address => address.id === selectedProfileId),
    [addresses, selectedProfileId]
  );

  const renderMarkers = useCallback(() => {
    return addresses.map((address, index) => (
      <Marker key={index} position={[address.latitude || 15.317277, address.longitude || 75.713890]}>
        <Popup>
          <div>
            <h3 className='text-blue-500'>{address.city}</h3>
            <p className='text-blue-500'>{address.street}, {address.city}, {address.state}, {address.zip}</p>
          </div>
        </Popup>
      </Marker>
    ));
  }, [addresses]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MapContainer center={[15.317277, 75.713890]} zoom={4} style={{ height: '550px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {renderMarkers()}
      {selectedAddress && <MapUpdater selectedAddress={selectedAddress} />}
    </MapContainer>
  );
};

export default Map;



// import React, { useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { Address } from '../types/types';

// interface MapProps {
//   addresses: Address[];
//   isLoading: boolean;
//   selectedProfileId?: string;
// }

// const MapUpdater: React.FC<{ selectedAddress?: Address }> = ({ selectedAddress }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (!selectedAddress) return;
//     map.flyTo([selectedAddress.latitude || 0, selectedAddress.longitude || 0], 13);
//   }, [selectedAddress, map]);

//   return null;
// };

// const Map: React.FC<MapProps> = ({ addresses, isLoading, selectedProfileId }) => {
//   const selectedAddress = addresses.find(address => address.id === selectedProfileId);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <MapContainer center={[15.317277, 75.713890]} zoom={4} style={{ height: '550px', width: '100%' }}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       {addresses.map((address, index) => (
//         <Marker key={index} position={[address.latitude || 15.317277, address.longitude || 75.713890]}>
//           <Popup>
//             <div>
//               <h3 className='text-blue-500'>{address.city}</h3>
//               <p className='text-blue-500'>{address.street}, {address.city}, {address.state}, {address.zip}</p>
//             </div>
//           </Popup>
//         </Marker>
//       ))}
//       {selectedAddress && <MapUpdater selectedAddress={selectedAddress} />}
//     </MapContainer>
//   );
// };

// export default Map;







// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { Address } from '../types/types';
// import { Loader } from './shared/Loader';

// interface MapProps {
//   addresses: Address[];
//   isLoading: boolean;
// }

// const Map: React.FC<MapProps> = ({ addresses, isLoading }) => {
//   if (isLoading) {
//     return <Loader />;
//   }

//   return (
//     <MapContainer center={[20.5937, 78.9629]} zoom={10} style={{ height: '550px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {addresses.map((address, index) => (
//         address.latitude && address.longitude && (
//           <Marker
//             key={index}
//             position={[address.latitude, address.longitude]}
//           >
//             <Popup>
//               <div>
//                 <h3>{address.city}</h3>
//                 <p>{address.street}, {address.city}, {address.state}, {address.zip}</p>
//               </div>
//             </Popup>
//           </Marker>
//         )
//       ))}
//     </MapContainer>
//   );
// };

// export default Map;

// Google Maps API

// import React, { useEffect, useRef } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { Address } from '../types/types';
// import { Loader } from './shared/Loader';

// interface MapProps {
//   addresses: Address[];
//   isLoading: boolean;
// }

// const Map: React.FC<MapProps> = ({ addresses, isLoading }) => {
//   const mapRef = useRef<google.maps.Map | null>(null);
//   const center = { lat: 0, lng: 0 };

//   useEffect(() => {
//     if (mapRef.current) {
//       const bounds = new window.google.maps.LatLngBounds();

//       addresses.forEach((address) => {
//         if (typeof address.latitude === 'number' && typeof address.longitude === 'number') {
//           const marker = new window.google.maps.Marker({
//             position: {
//               lat: address.latitude,
//               lng: address.longitude
//             },
//             map: mapRef.current,
//           });
//           bounds.extend(marker.getPosition() as google.maps.LatLng);
//         }
//       });
//       mapRef.current.fitBounds(bounds);
//     }
//   }, [addresses]);

//   if (isLoading) {
//     return <Loader />;
//   }

//   return (
//     <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
//       <GoogleMap
//         center={center}
//         zoom={10}
//         mapContainerStyle={{ height: '550px', width: '100%' }}
//         onLoad={(map) => {
//           if (mapRef.current === null) {
//             mapRef.current = map;
//           }
//         }}
//       >
//         {addresses.map((address, index) => (
//           <Marker
//             key={index}
//             position={{
//               lat: typeof address.latitude === 'number' ? address.latitude : 0,
//               lng: typeof address.longitude === 'number' ? address.longitude : 0,
//             }}
//           />
//         ))}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Map;
