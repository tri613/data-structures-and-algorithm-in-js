function maxStockProfit(...prices) {
  let maxProfit = -1;
  let flag = true;
  let temp = 0;

  prices.forEach((price, time) => {
    let d = time == 0 ? 0 : price - prices[time - 1];

    if (d < 0) {
      flag = false;
      return;
    }

    if (!flag) {
      if (temp > maxProfit) {
        maxProfit = temp;
      }
      temp = 0;
    } else {
      temp += d;
    }

    flag = true;
  });

  return maxProfit;
}