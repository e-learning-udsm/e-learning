import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, MapContainerProps } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const Map = () => {
  // University of Dar es Salaam coordinates
  const position = [-6.7924, 39.2083] as [number, number];

  return (
    <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer 
        center={position} 
        zoom={16} 
        style={{ height: '100%', width: '100%' }}
        className="z-0"
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold text-sm mb-1">UDSM e-Learning Research Group</h3>
              <p className="text-xs text-muted-foreground mb-1">College of Education</p>
              <p className="text-xs text-muted-foreground">University of Dar es Salaam</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;