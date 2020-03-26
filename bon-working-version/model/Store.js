class Store {
      constructor(name, id){
      this.id = id
      this.name = name;
      this.checkoutCounters = [];
    }

    addCashRegister(id) {
        this.checkoutCounters.push(CashRegister(id))
    }
  }

  class CashRegister {
      constructor(id, storeId) {
          this.id = id
          this.receipts = []
      }

      addReceipt(date, id, purchasedItems) {
        this.receipts.push(Receipt(obj["date"], obj["id"], obj["purchasedItems"], obj["storeName"]));
      }

      get getLatestReceipt() {
          return this.receipts[this.receipts.length]
      }
  }

