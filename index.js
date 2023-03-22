const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteryBatches = [15, 10, 5];

const totalBatteries = batteryBatches.reduce((acc, curr) => acc + curr, 0);

console.log(totalBatteries); // Output: 30
