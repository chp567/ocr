var data = require('./repository/bdd')

let diagnovie = [{Laboratory: 'dinovie'}];
let biotop = [{Laboratory: 'biotop'}];

let jsontest = './results/diagnovie.json';

data.base(diagnovie, jsontest);
