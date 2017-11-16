function maxStockProfit(...prices) {
  let maxProfit = -1;

  for (let i = prices.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      let profit = prices[i] - prices[j];
      if (profit > 0 && profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}