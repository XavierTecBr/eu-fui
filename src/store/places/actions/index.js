import service from './../services/searchNearby'

const getNearby = ({commit}, {coordinates}) => {
  service.getPlacesNearby({coordinates}).then((result) => {
    commit('places/setNearbyPlacesByMyCoordinates', result)
  }).catch(error => {
    Promise.reject(error)
  })
}
export default {
  getNearby
}