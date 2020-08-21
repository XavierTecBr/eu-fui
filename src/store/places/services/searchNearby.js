import axios from 'axios'

const getPlacesNearby = ({coordinates}) => {
  console.log(coordinates)
  const url = '/nearbysearch'
  return axios.get(url)
}
export default {
    getPlacesNearby
}