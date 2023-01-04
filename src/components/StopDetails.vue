<template>
  <h2>Stop arrivals</h2>
  <div>
    <vue-good-table :columns="columns" :rows="rows"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          label: 'Id',
          field: 'busId',
          type: 'number',
        },
        {
          label: 'Headsign',
          field: 'headsign',
        },
        {
          label: 'Theoretical time',
          field: 'theoreticalTime',
        },
        {
          label: 'Estimated time',
          field: 'estimatedTime',
        },
      ],
      rows: [],
    }
  },
  methods: {
    async getStopDetails() {
      var dto = await fetch("https://localhost:7146/api/arrivals/"+this.$route.params.id, {
        method: 'get'
      }).then(response => {
        return response.json();
      }).then(data => {
        return data;
      });
      console.log(dto);
      console.log("dupa");
      this.rows = dto.arrivals;
    },
  },
  beforeMount() {
    this.getStopDetails();
  }
}

</script>

<style>
input {
  margin: auto;
  display: block;
}
</style>