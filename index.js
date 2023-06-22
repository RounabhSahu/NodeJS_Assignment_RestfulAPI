


const mongoose = require('mongoose');
const express = require('express');
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'StudentsRecords';

mongoose.connect('mongodb+srv://godemode12:Guddu%4012@passwordis123456.epqltzu.mongodb.net/')
    .then(e=>console.log('Connected'))
    .catch(e=>console.log('Error connecting'))
