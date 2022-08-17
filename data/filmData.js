const films = require("./films.json");
const fs = require("fs");

const newfilmsArr = [];
for (const film of films) {
  const updateData = {};
  for (const key in film) {
    if (key === 'title' || key === 'description' || key === 'director' || key === 'producer' || key === 'release_date' || key === 'running_time' || key === 'rt_score') {
      updateData[key] = film[key];
    }
  }
  newfilmsArr.push(updateData);
}

console.log(newfilmsArr);

fs.writeFile("filmData.json", JSON.stringify(newfilmsArr), (err, result) => {
  if (err) console.log("error", err);
});

