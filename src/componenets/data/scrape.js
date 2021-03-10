const cheerio = require("cheerio");
const fs = require("fs");
const axios = require("axios");

axios
  .get(
    "https://www.imdb.com/chart/moviemeter?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=4da9d9a5-d299-43f2-9c53-f0efa18182cd&pf_rd_r=31P2F5ER089FAQZ8Y5RC&pf_rd_s=right-4&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_ql_2"
  )
  .then((urlResponse) => {
    var $ = cheerio.load(urlResponse.data);
    var htmlEntries = $(".lister-list").find("a");
    var movieName;
    var movies = [];

    htmlEntries.each((h, el) => {
      movieName = $(el).text().replace(/\s\s/g, "");

      movies.push({
        ID: h,
        MovieName: movieName,
      });

      const artFinal = JSON.stringify(movies);
      const filename = "data" + ".json";
      fs.writeFileSync(filename, artFinal);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
