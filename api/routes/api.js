var express = require('express');
const multer = require('multer');

var Store = require('../model/Store')
var Receipt = require('../model/Receipt')
var db = require('../public/dumbDataBase');

var router = express.Router();

/* GET users listing. */
router.get('/receipts', function(req, res, next) {
  res.send(db[0]);
});

router.post('/linkCheckout', function(req, res) {
    res.send(db)
})

router.post('/addReceipt', function(req, res) {
    var receipt = new Receipt(req.body["date"], req.body["id"], req.body["purchasedItems"], req.body["storeName"]);
    res.send({
        "response": receipt
    })
})

router.post('/createSecondaryReceipt', function(req, res) {
    var receipt = new Receipt
})

router.post('/addReceiptString', function(req, res) {
    req.body()
})

router.post('/addStore', function(req, res) {
    var receipt = new Receipt
})

module.exports = router;
