class Receipt {
    constructor(){
        
    }
    
    setProperties(date, storeId, id, purchasedItems) {
        this.date = date;
        this.storeId = storeId;
        this.id = id;
        this.receiptItems = []
        this.receiptItems.push(new Item(purchasedItems));
    }
    
    setProperties(id, storeId, purchasedItems){
        this.date = date;
        this.storeId = storeId;
        this.id = id;
        this.receiptItems = []
        this.receiptItems.push(new Item(purchasedItems));
    }

    setProperties(id, storeId, purchasedItems, date){
        this.date = date;
        this.storeName = storeName;
        this.id = id;
        this.receiptItems = []
        this.receiptItems.push(new Item(purchasedItems));
        // for (var i=0; i<tempArray.length; i++) {
        //     this.receiptItems.push(new Item(purchasedItems[i]));
        // }
    }
}

class Item {
    constructor(csvString){
        console.log(csvString);
        var vals = csvString.split(";");
        console.log(vals)
        this.quantity = parseInt(vals[0]);
        this.itemPrice = parseFloat(vals[2]);
        this.description = vals[1];
        this.tax = vals[3];
        this.subTotal = this.quantity*this.itemPrice;
    }
}

module.exports = Receipt;