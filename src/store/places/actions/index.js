import service from './../services/searchNearby'

const getNearby = ({commit}, {coordinates}) => {
  service.getPlacesNearby({coordinates}).then((result) => {
    commit('places/setNearbyPlacesByMyCoordinates', result)
  })
}
export default {
  getNearby
}