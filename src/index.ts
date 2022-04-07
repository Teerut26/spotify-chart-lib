import HttpRequest from "./http_request";
import { Regional } from "./type/regional";
import { Time } from "./type/time";
import cheerio from "cheerio";
import { Song } from "./interfaces/song";

class SpotifyChart extends HttpRequest {
     private regional: Regional | undefined;
     private time: Time | undefined;
     private result: Song[] = [];

     constructor(regional: Regional, time: Time) {
          super();
          this.regional = regional;
          this.time = time;
          this.execute();
     }

     public async execute(): Promise<Song[]> {
          let { data } = await this.get(
               `https://spotifycharts.com/regional/${this.regional}/${this.time}/latest`
          );
          const $ = cheerio.load(data);
          let lists = Array.from(
               $("#content > div > div > div > span > table > tbody > tr")
          );
          lists.map((item) => {
               const song: Song = {
                    title: $(item).find("strong").text(),
                    artist: $(item)
                         .find("td.chart-table-track > span")
                         .text()
                         .replace("by ", "")
                         .split(", "),
                    image_cover: $(item)
                         .find("td.chart-table-image > a")
                         .attr("href") as string,
                    rank: Number.parseInt(
                         $(item).find("td.chart-table-position").text()
                    ),
                    streams: Number.parseInt(
                         $(item)
                              .find("td.chart-table-streams")
                              .text()
                              .replaceAll(",", "")
                    ),
               };
               this.result.push(song);
          });
          return this.result
     }
}

export default SpotifyChart;