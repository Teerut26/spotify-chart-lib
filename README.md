## Spotify Chart Lib

#### Create Instance
```.ts
let spotifyCharts = new SpotifyChart("th", "daily");

(async () => {

    let result = await spotifyCharts.execute();
     console.log(result)

})();
```