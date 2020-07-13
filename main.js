function maxStockProfit(pricesArr){
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  // Starting in the red
  let loss = true;

  for (let i = 0; i < pricesArr.length; i++){

    // Trying to recover from loss
    if (loss){
      buyPrice = pricesArr[i];
    }
    
    // Move to next price
    sellPrice = pricesArr[i + 1];
    
    // If money lost in trade...
    if (sellPrice < buyPrice){
      loss = true;
    }
    else {
      let profit = sellPrice - buyPrice;

      if (profit > maxProfit) {
        maxProfit = profit;
      }
      
      // Made a profit so...
      loss = false;
    }
  }

  return maxProfit;
}

maxStockProfit([32,46,26,38,40,48,42]) // Returns 22
maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]) // Returns 12