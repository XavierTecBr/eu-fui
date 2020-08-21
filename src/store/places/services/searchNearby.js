import axios from 'axios'

const getPlacesNearby = ({coordinates}) => {
  console.log(coordinates)
  const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='
  +coordinates.lat+','+coordinates.lng
  +'&radius=5000'
  +'&language=pt-BR'
  +'&key='+process.env.KEY
  return axios.get(url)
}
export default {
    getPlacesNearby
}