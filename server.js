var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('client'));

app.use(bodyParser.json());

var _juices = [{
    id: 1,
    name: 'summer special',
    price: 10,
    mixOf: 'mango and strawberry'
}, {
    id: 2,
    name: 'blue fantasy',
    price: 5,
    mixOf: 'grapes and blueberries'
}, {
    id: 3,
    name: 'wine mix',
    price: 7,
    mixOf: 'berries and grapes'
}, {
    id: 4,
    name: 'Green juice',
    price: 8,
    mixOf: 'Green apple and mint'
}];

var _nextId = 5;

app.get('/juice/:id',function (req,res){
    var theId = req.params.id;
    _juices.forEach(function(item){
        if (theId == item.id) {
            return res.json(item);
        }
    })
    res.status(404).end();
});


app.get('/juices',function (req,res){
    res.json(_juices);
});

app.post('/juices',function(req,res){
    var recievedData = req.body;
    recievedData.id = _nextId;
    _juices.push(recievedData);
    res.status(201).json(recievedData);
    _nextId++;
});

app.listen(8075, function (err, success) {
    console.log("server running at http://localhost:8075");
});