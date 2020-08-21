<template>
  <div>
    <h1> Your coordinates:</h1>
    <p>{{ coordinates.lat }} Latitude, {{coordinates.lng}} Longitude</p>

    <hr/>
    <h1> Places Nearby:</h1>
    <p v-for="place in placesNearbyMe.results" :key="place.place_id">
      {{place.name}}
      <img :src="place.photo_reference">
    </p>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState({
      placesNearbyMe: state => state.place.placesNearbyMe
    })
  },
  data() {
    return {
      coordinates: {
        lat: 0,
        lng: 0
      }
    }
  },
  methods: {
    ...mapActions('place', ['getNearby'])
  },
  created() {
    this.$getLocation({})
      .then(coordinates => {
        this.coordinates = coordinates
        this.getNearby({coordinates})
      })
      .catch(error => {
        Promise.reject(error)
      })
  },
  mounted() {
  }
}
</script>