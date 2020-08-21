import state from './../states'

export default {
    setNearbyPlacesByMyCoordinates(data) {
        state.placesNearbyMe = data
    }
}