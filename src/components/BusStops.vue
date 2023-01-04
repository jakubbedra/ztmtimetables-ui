<template>
  <h2>Stops</h2>
  <div>
    <vue-good-table :columns="columns" :rows="rows">
      <template #table-row="props">
        <span v-if="props.column.field === 'add' && this.$store.state.token !== ''">
          <button type="button" class="btn" style="color: white" v-on:click="save(props.row.stopId)">
            Save Stop
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
          field: 'add',
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
    save(id) {
      console.log(id);
      fetch("https://localhost:7146/api/users/current/stops", {
        method: 'post',
        headers: {
          'Authorization': 'Bearer ' + this.$store.state.token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ stopId: id })
      });
    },
    async getAllStops() {
      const dto = await fetch("https://localhost:7146/api/stops", {
        method: 'get',
      }).then(response => {
        return response.json();
      }).then(data => {
        return data;
      });
      this.rows = dto.stops;
      console.log(this.rows);
      console.log(this.rows[0]);
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