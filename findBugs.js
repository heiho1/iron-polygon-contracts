const fs = require('fs');
let bugs = require('./audit/analysis');
let dets = bugs.results.detectors;
let results = {};
for (let d of dets) {
  if (d.check !== 'naming-convention') {
    console.log(`${d.check} - ${d.description}`);
    if (!results[d.check]) {
      results[d.check] = [d.description]
    } else {
      results[d.check].push(d.description);
    }
  }
}
fs.writeFileSync('./audit/results.json', JSON.stringify(results, null, 2));
