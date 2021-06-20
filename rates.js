var gsheet_url =
  "https://spreadsheets.google.com/feeds/list/16ZUrVXTwh91XbiOSPKVw_iGNUk2mzcBJeW0bG6VBCZw/1/public/values?alt=json";

window.addEventListener("load", (e) => {
  new Vue({
    el: "#app",
    data() {
      return {
        rates: [],
      };
    },
    mounted() {
      fetch(gsheet_url)
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
    },
  });
});
