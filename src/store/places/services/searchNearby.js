import axios from 'axios'

const getPlacesNearby = ({coordinates}) => {
  console.log(coordinates)
  const url = window.location.hostname+'/nearbysearch'
  return axios.get(url).catch(error => {
    Promise.reject(error)
  })
}
export default {
    getPlacesNearby
}