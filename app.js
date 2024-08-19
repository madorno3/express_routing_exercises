const express = require('express');
const app = express();
const { findMode, findMedian } = require('./calc_functions');

app.get('/mean/:nums', (req, res) => {
    const nums = req.params.nums;
    const splitNums = nums.split(',');
    console.log(splitNums);
    if (nums.length === 0) {
        return res.status(400).send("Nothing to see here...");
    }
    if (!splitNums.every(num => !isNaN(num))) {
        return res.status(400).send("Invalid input! Only numbers are allowed.");
    }
    const getAverage = (numbers) => {
        return numbers.map(Number).reduce((sum, currentValue) => sum + currentValue, 0) / numbers.length;
    };

    let result = {
        operation: "mean",
        result: getAverage(splitNums)
    }
    return res.json(result)
});

app.get('/median/:nums', (req, res) => {
    const nums = req.params.nums;
    const splitNums = nums.split(',').map(Number);
    if (nums.length === 0) {
        return res.status(400).send("Nothing to see here...");
    }
    if (!splitNums.every(num => !isNaN(num))) {
        return res.status(400).send("Invalid input! Only numbers are allowed.");
    }
    
    sortedNums = splitNums.sort(function(a, b) {
        return a - b;
    });
     
    let result = {
        operation: "median",
        result: findMedian(sortedNums)
    }

    return res.json(result)
});

app.get('/mode/:nums', (req, res) => {
    const nums = req.params.nums;
    const splitNums = nums.split(',').map(Number);
    if (nums.length === 0) {
        return res.status(400).send("Nothing to see here...");
    }
    if (!splitNums.every(num => !isNaN(num))) {
        return res.status(400).send("Invalid input! Only numbers are allowed.");
    }
    sortedNums = splitNums.sort(function(a, b) {
        return a - b;
    });
    
    let result = {
        operation:"mode",
        result: findMode(sortedNums)
    }
    return res.json(result)
});

app.listen(3000, () => {
    console.log("Server running on port 3000")
});

