import axios from 'axios'

const getPlacesNearby = ({coordinates}) => {
  console.log(coordinates)
  const url = '/nearbysearch'
  return axios.get(url).catch(error => {
    Promise.reject(error)
  })
}
export default {
    getPlacesNearby
}