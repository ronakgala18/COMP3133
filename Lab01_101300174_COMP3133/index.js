var fs = require('fs');
var csv = require('csv-parser');

try{
    fs.unlinkSync("canada.txt");
    fs.unlinkSync("usa.txt")
} catch(err){
    console.log("No file to delte");
}
const readData = fs.createReadStream("input_countries.csv");
readData.pipe(csv())
        .on("data", (data) => {
            if (data.country === "Canada") {
                fs.appendFileSync( "canada.txt",
                    `${data.country}, ${data.year}, ${data.population}\n`
                );
            }
            if (data.country === "United States") {
                fs.appendFileSync("usa.txt",
                    `${data.country}, ${data.year}, ${data.population}\n`
                );
            }
});
console.log("Data extraction completed")