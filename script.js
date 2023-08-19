function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let maxP = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      // Calculate the profit and update maxP if needed
      const profit = prices[right] - prices[left];
      maxP = Math.max(maxP, profit);
    } else {
      // Update the left pointer to the current right pointer
      left = right;
    }

    // Move the right pointer
    right++;
  }

  return maxP; // Return the maximum profit
}

