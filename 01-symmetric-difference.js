function differenceSymetricOfTwo(array1, array2) {
  const result = [];
  const arrayA = [...new Set(array1)];
  const arrayB = [...new Set(array2)];

  arrayA.forEach((element) => {
    if (!arrayB.includes(element)) {
      result.push(element);
    }
  });
  arrayB.forEach((element) => {
    if (!arrayA.includes(element)) {
      result.push(element);
    }
  });

  result.sort((a, b) => a - b);

  return result;
}

function sym() {
  const myArrays = [...arguments];
  let result = myArrays[0];

  for (let index = 1; index < myArrays.length; index++) {
    result = differenceSymetricOfTwo(result, myArrays[index]);
  }

  return result;
}
