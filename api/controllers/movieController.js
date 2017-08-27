'use strict';

var url = require('url');
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;



var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_movies = function(req, res) {
  MongoClient.connect('mongodb://127.0.0.1:27017/moviedb', function(err, db) {
    if(err) throw err;
    // Locate all the entries using find
    var collection = db.collection('movies');
    collection.find().toArray(function(err, results) {
        res.json(results);
        // Let's close the db
        db.close();
    });
});
};

exports.list_all_reviews = function(req, res) {
  MongoClient.connect('mongodb://127.0.0.1:27017/moviedb', function(err, db) {
    if(err) throw err;
    // Locate all the entries using find
    var collection = db.collection('reviews');
    collection.find().toArray(function(err, results) {
        res.json(results);
        // Let's close the db
        db.close();
    });
});
};

exports.write_review = function(req, res) {
  MongoClient.connect('mongodb://127.0.0.1:27017/moviedb', function(err, db) {
    if(err) throw err;

    var collection = db.collection('reviews');
    collection.insert(req.body, function(err, docs) {
        collection.count(function(err, count) {
            console.log(format("count = %s", count));
        });
    });
db.close();
  });
  res.json(req.url.pathname);
};

exports.create_a_movie = function(req, res) {
  MongoClient.connect('mongodb://127.0.0.1:27017/moviedb', function(err, db) {
    if(err) throw err;

    var collection = db.collection('movies');
    collection.insert(req.body, function(err, docs) {
        collection.count(function(err, count) {
            console.log(format("count = %s", count));
        });
    });
db.close();
  });
  res.json(req.url.pathname);

};





