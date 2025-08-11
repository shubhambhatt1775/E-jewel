import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});

const MapView = () => {
  const position = [23.2231, 72.6571]; // LDRP-ITR
  const [mapType, setMapType] = useState("street");

  const tileLayers = {
    satellite:
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    street:
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>

     <div className="mt-24 bg-primary/10 w-full " >

       <p className='text-2xl md:text-3xl font-medium pt-6 pl-6'>Location</p>

    <div className=" relative flex flex-col px-4 py-10 items-center space-y-10 relative w-full">
    
      <div className="w-100 xl:w-310 rounded-xl shadow-5xl overflow-hidden ">
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: "400px", width:"190%", position:"relative" }}
        >
          <TileLayer
            attribution='Map data &copy; contributors'
            url={tileLayers[mapType]}
          />
         
        </MapContainer>

      
        </div>
          {/* Toggle Buttons */}
        <div className=" h-[50px] items-center bottom-4 right-4 flex gap-3  px-24 mt-12 ">
       
          {/* Street Button */}
          <button  
            onClick={() => setMapType("street")}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 shadow ${
              mapType === "street"
                ? "bg-blue-600 text-white scale-105"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
          >
            Street View
          </button>

          {/* Satellite Button */}
          <button
            onClick={() => setMapType("satellite")}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 shadow ${
              mapType === "satellite"
                ? "bg-green-600 text-white scale-105"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
          >
            Satellite View
          </button>
          </div>
      </div>
      
  </div>
  </div>
  );
};

export default MapView;
