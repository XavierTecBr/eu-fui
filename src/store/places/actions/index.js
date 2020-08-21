import service from './../services/searchNearby'

const getNearby = ({commit}, {coordinates}) => {
  const teste = service.getPlacesNearby({coordinates}).then((result) => {
    commit('setNearbyPlacesByMyCoordinates', result.data)
  }).catch(error => {
    Promise.reject(error)
  })

  console.log(teste)
}
export default {
  getNearby
}