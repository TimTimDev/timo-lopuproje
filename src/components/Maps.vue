

<template>
  <GoogleMap 
  class="p-8"
  api-key=""
   style="width: 100%; height: 60%" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>


<script>
  import { defineComponent } from "vue";
  import { GoogleMap, Marker } from "vue3-google-map";

  export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 58.256466, lng: 22.482349 };
    return { center };
  },
});
</script>