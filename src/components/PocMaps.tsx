import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const PocMaps = () => {
  const mapStyles = {
    height: '100%',
    width: '100%',
  }

  const defaultCenter = {
    lat: -23.55792999267578,
    lng: -46.66156005859375,
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyCm-1FOyqNw3ShfYbXs2Xh-2M8QVlYEd8I">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default PocMaps
