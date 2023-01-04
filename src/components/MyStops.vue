<template>
  <h2>My Stops</h2>
  <div>
    <vue-good-table :columns="columns" :rows="rows">
      <template #table-row="props">
        <span v-if="props.column.field === 'details'">
          <button type="button" class="btn" style="color: white" v-on:click="goToDetails(props.row.stopId)">
            View details
          </button>
        </span>
        <span v-if="props.column.field === 'remove'">
          <button type="button" class="btn" style="color: white; background-color: red" v-on:click="remove(props.row.stopId)">
            Remove
          </button>
        </span>
        <span v-else>
                {{ props.formattedRow[props.column.field] }}
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          label: 'Id',
          field: 'stopId',
          type: 'number',
        },
        {
          label: 'Description',
          field: 'stopDescription',
        },
        {
          label: 'Zone',
          field: 'zoneName',
        },
        {
          label: 'Zone Id',
          field: 'zoneId',
          type: 'number',
        },
        {
          label: 'On demand',
          field: 'onDemand',
        },
        {
          label: '',
          field: 'details',
        },
        {
          label: '',
          field: 'remove',
        },
      ],
      rows: [
        {
          stopId: 8230,
          stopDescription: "Gdynia Szafranowa",
          zoneName: "Gdynia",
          zoneId: 5,
          onDemand: 0
        },
        {
          stopId: 8231,
          stopDescription: "Gdynia Leśna Polana (N/Ż)",
          zoneName: "Gdynia",
          zoneId: 5,
          onDemand: 1
        },
        {
          stopId: 8234,
          stopDescription: "Centrum Nadawcze RTV (N/Ż)",
          zoneName: "Żukowo",
          zoneId: 4,
          onDemand: 1
        },
        {
          stopId: 8235,
          stopDescription: "Chwaszczyno Gdyńska (N/Ż)",
          zoneName: "Żukowo",
          zoneId: 4,
          onDemand: 1
        },
        {
          stopId: 8236,
          stopDescription: "Chwaszczyno",
          zoneName: "Żukowo",
          zoneId: 4,
          onDemand: 0
        },
        {
          stopId: 8237,
          stopDescription: "Chwaszczyno",
          zoneName: "Żukowo",
          zoneId: 4,
          onDemand: 0
        },
        {
          stopId: 8239,
          stopDescription: "Centrum Nadawcze RTV (N/Ż)",
          zoneName: "Gdynia",
          zoneId: 5,
          onDemand: 1
        },
        {
          stopId: 8244,
          stopDescription: "Gdynia Leśna Polana (N/Ż)",
          zoneName: "Gdynia",
          zoneId: 5,
          onDemand: 1
        },
        {
          stopId: 8245,
          stopDescription: "Gdynia Szafranowa",
          zoneName: "Gdynia",
          zoneId: 5,
          onDemand: 0
        },
        {
          stopId: 8246,
          stopDescription: "Gdynia Paprykowa",
          zoneName: "Gdynia",
          zoneId: 5,
          onDemand: 0
        },
        {
          stopId: 8247,
          stopDescription: "Gdynia Dąbrowa Centrum",
          zoneName: "Gdynia",
          zoneId: 5,
          onDemand: 0
        },
        {
          stopId: 8248,
          stopDescription: "Gdynia Anyżowa",
          zoneName: "Gdynia",
          zoneId: 5,
          onDemand: 0
        },
        {
          stopId: 8249,
          stopDescription: "Gdynia Kameliowa",
          zoneName: "Gdynia",
          zoneId: 5,
          onDemand: 0
        },
      ],
    }
  },
  methods: {
    goToDetails(stopId) {
      console.log(stopId);
      this.$router.replace({ path: '/stop/'+stopId });
    },
    remove(stopId) {
      console.log(stopId);
      fetch("https://localhost:7146/api/users/current/stops/"+stopId, {
        method: 'delete',
        headers: {
          'Authorization': 'Bearer ' + this.$store.state.token
        }
      });
    },
    async getAllStops() {
      var dto = await fetch("https://localhost:7146/api/users/current/stops", {
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + this.$store.state.token
        }
      }).then(response => {
        return response.json();
      }).then(data => {
        return data;
      });
      console.log(dto);
      console.log("dupa");
      this.rows = dto.stops;
    },
  },
  beforeMount() {
    this.getAllStops();
  }
}

</script>

<style>
input {
  margin: auto;
  display: block;
}
</style>