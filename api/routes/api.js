var express = require('express');
const multer = require('multer');

var Store = require('../model/Store')
var Receipt = require('../model/Receipt')
var db = require('../public/dumbDataBase');

var router = express.Router();

var data = [
    {
       "id": 1000,
      "storeName": "Rewe East Side Mall",
      "date": "21.09.99",
      "sumTotal": "16",
      "purchaseList": [
          {
              "id": 1001,
              "quantity": 2,
              "description": "SW-Pulled Pork J",
              "itemPrice": 3.49,
              "tax": "B"
          },
          {
              "id": 1002,
              "quantity": 1,
              "description": "Salami 1A",
              "itemPrice": 1.49,
              "tax": "B"
          },
          {
              "id": 1003,
              "quantity": 1,
              "description": "Dauerw. Aufschnit",
              "itemPrice": 1.99,
              "tax": "B"
          },
          {
              "id": 1004,
              "quantity": 2,
              "description": "Allg. Emmentaler",
              "itemPrice": 2.69,
              "tax": "B"
          },
          {
              "id": 1005,
              "quantity": 2,
              "description": "Ciabatta",
              "itemPrice": 0.79,
              "tax": "B"
          },
          {
              "id": 1006,
              "quantity": 1,
              "description": "American Sandwi.",
              "itemPrice": 0.89,
              "tax": "B"
          },
          {
              "id": 1007,
              "quantity": 2,
              "description": "Avocado FeinW.",
              "itemPrice": 2.79,
              "tax": "B"
          },
          {
              "id": 1008,
              "quantity": 1,
              "description": "Irische Butter",
              "itemPrice": 2.39,
              "tax": "B"
          }
      ]
    }, {
        "id": 1001,
      "storeName": "Rewe City Fhain",
      "date": "21.09.99",
      "sumTotal": "16",
      "purchaseList": [
          {
              "id": 1001,
              "quantity": 2,
              "description": "SW-Pulled Pork J",
              "itemPrice": 3.49,
              "tax": "B"
          },
          {
              "id": 1002,
              "quantity": 1,
              "description": "Salami 1A",
              "itemPrice": 1.49,
              "tax": "B"
          },
          {
              "id": 1003,
              "quantity": 1,
              "description": "Dauerw. Aufschnit",
              "itemPrice": 1.99,
              "tax": "B"
          },
          {
              "id": 1004,
              "quantity": 2,
              "description": "Allg. Emmentaler",
              "itemPrice": 2.69,
              "tax": "B"
          },
          {
              "id": 1005,
              "quantity": 2,
              "description": "Ciabatta",
              "itemPrice": 0.79,
              "tax": "B"
          },
          {
              "id": 1006,
              "quantity": 1,
              "description": "American Sandwi.",
              "itemPrice": 0.89,
              "tax": "B"
          },
          {
              "id": 1007,
              "quantity": 2,
              "description": "Avocado FeinW.",
              "itemPrice": 2.79,
              "tax": "B"
          },
          {
              "id": 1008,
              "quantity": 1,
              "description": "Irische Butter",
              "itemPrice": 2.39,
              "tax": "B"
          }
      ]
    }
]

/* GET users listing. */

router.post('/addReceipt', function(req, res) {
    // Expected Input
    /*
    - Store Info
        - Name
        - Date
        - Custom Info
    - List of Items
        -> [description, price, tax]
    */

    // Expected Output
    /*
    - QR Code Image File
    - URL for encoding
    */ 
    var receipt = new Receipt(req.body["date"], req.body["id"], req.body["purchasedItems"], req.body["storeName"]);
    res.send({
        "response": receipt
    })
})

router.post('/addFileForProcessing', function(req, res) {
    // This needs to be processed and point to multer file upload index
    /*
    Expected Output
    - QR Code Image File
    - URL For encoding
    */
})

router.post('/addTextForProcessing', function(req, res) {
    // text from here should be processed using NLP
    req.body()
})

module.exports = router;
