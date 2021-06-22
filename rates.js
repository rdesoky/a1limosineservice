var firstSheet =
  "https://spreadsheets.google.com/feeds/list/16ZUrVXTwh91XbiOSPKVw_iGNUk2mzcBJeW0bG6VBCZw/1/public/values?alt=json";
var secondSheet =
  "https://spreadsheets.google.com/feeds/list/16ZUrVXTwh91XbiOSPKVw_iGNUk2mzcBJeW0bG6VBCZw/2/public/values?alt=json";

window.addEventListener("load", (e) => {
  new Vue({
    el: "#app",
    data() {
      return {
        rates: [],
        extra: {},
      };
    },
    mounted() {
      fetch(firstSheet)
        .then((response) => response.json())
        .then((results) =>
          results.feed.entry.map((row) => ({
            index: row.gsx$index.$t,
            city: row.gsx$city.$t,
            sfo: row.gsx$sfo.$t,
            sjc: row.gsx$sjc.$t,
            oak: row.gsx$oak.$t,
            sf_city: row.gsx$sfcity.$t,
          }))
        )
        .then((rates) => (this.rates = rates));
      fetch(secondSheet)
        .then((response) => response.json())
        .then((results) =>
          results.feed.entry.map((row) => ({
            townCar: row.gsx$towncar.$t,
            suv: row.gsx$suv.$t,
            limo: row.gsx$limo.$t,
            airportSUV: row.gsx$airportsuv.$t,
            airportEarly: row.gsx$airportearly.$t,
            airportParking: row.gsx$airportparking.$t,
            stopSameCity: row.gsx$stopsamecity.$t,
            stopOtherCity: row.gsx$stopothercity.$t,
            gateMeet: row.gsx$gatemeet.$t,
            gratuity: row.gsx$gratuity.$t,
          }))
        )
        .then((extra) => (this.extra = extra[0]));
    },
  });
});
