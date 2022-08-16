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
  let sum = 0;
  let i = 0;

  // Ваш код
  while (arr[i]) {
    sum += arr[i];
    i++;
  }
  
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let res;
  let i = 0;

  // Ваш кода
  while (arrOfArr[i]) {
    res = func(arrOfArr[i]);
    if (res > max) {
      max = res; 
    }
    i++;
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let dif;
  let i = 0;
  max = arr[0];
  min = arr[0];

 while (arr[i]) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    i++;
  }
  dif = Math.abs(max - min);
  
  return dif;

}
