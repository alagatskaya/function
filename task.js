// Задание 1
function getArrayParams(arr) {
  let min, max, avg;
  let sum = 0;
  let i = 0;

  // Ваш кот
  min = arr[0];
  max = arr[0];
  
  while (arr[i]) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
    i++;
  }
  avg = sum / i;

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
