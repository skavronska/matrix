const maxNumber = 22;

export const largeCircleValue1 = (mainString: string[], birth: string) => {
  if (parseInt(mainString.slice(2, 4)[0] + mainString.slice(2, 4)[1]) >= maxNumber) {
    return parseInt(mainString[2]) + parseInt(mainString[3]);
  } else {
    return parseInt(mainString.slice(2, 4)[0] + mainString.slice(2, 4)[1]);
  }
};

export const largeCircleValue2 = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue1(mainString, birth) + largeCircleValue4(mainString, birth));
};

export const largeCircleValue3 = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue1(mainString, birth) + largeCircleValue5(mainString, birth));
};

export const largeCircleValue4 = (mainString: string[], birth: string) => {
  if (parseInt(birth.slice(0, 2)) > maxNumber) {
    return parseInt(mainString[0]) + parseInt(mainString[1]);
  } else {
    return parseInt(birth.slice(0, 2));
  }
};

export const largeCircleValue5 = (mainString: string[], birth: string) => {
  const result =
    parseInt(mainString[4]) +
    parseInt(mainString[5]) +
    parseInt(mainString[6]) +
    parseInt(mainString[7]);

  if (result > maxNumber) {
    return parseInt(result.toString()[0]) + parseInt(result.toString()[1]);
  } else {
    return result;
  }
};

export const largeCircleValue6 = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue4(mainString, birth) + largeCircleValue8(mainString, birth));
};

export const largeCircleValue7 = (mainString: string[], birth: string) => {
  const result = largeCircleValue5(mainString, birth) + largeCircleValue8(mainString, birth);
  if (result > maxNumber) {
    return parseInt(result.toString()[0]) + parseInt(result.toString()[1]);
  } else {
    return result;
  }
};

export const largeCircleValue8 = (mainString: string[], birth: string) => {
  const result =
    largeCircleValue4(mainString, birth) +
    largeCircleValue1(mainString, birth) +
    largeCircleValue5(mainString, birth);
  if (result > maxNumber) {
    return parseInt(result.toString()[0]) + parseInt(result.toString()[1]);
  } else {
    return result;
  }
};

export const largeCircleValueCenter = (mainString: string[], birth: string) => {
  const result =
    largeCircleValue1(mainString, birth) +
    largeCircleValue4(mainString, birth) +
    largeCircleValue5(mainString, birth) +
    largeCircleValue8(mainString, birth);
  if (result > maxNumber) {
    return parseInt(result.toString()[0]) + parseInt(result.toString()[1]);
  } else {
    return result;
  }
};

export const mediumCircleG23 = (mainString: string[], birth: string) => {
  const result = largeCircleValue6(mainString, birth) + smallCircleH22(mainString, birth);
  if (result > maxNumber) {
    return parseInt(result.toString()[0]) + parseInt(result.toString()[1]);
  } else {
    return result;
  }
};

export const mediumCircleK27 = (k26: number, k28: number) => {
  const result = (k26 + k28).toString();
  if (parseInt(result) > maxNumber) {
    return parseInt(result[0]) + parseInt(result[1]);
  } else {
    return result;
  }
};

export const smallCircleH22 = (mainString: string[], birth: string) => {
  const result =
    largeCircleValueCenter(mainString, birth) +
    largeCircleValue8(mainString, birth) +
    largeCircleValue8(mainString, birth);
  if (result > maxNumber) {
    return parseInt(result.toString()[0]) + parseInt(result.toString()[1]);
  } else {
    return result;
  }
};

export const getSum = (num: number) => {
  if (num.toString().length == 3) {
    return parseInt(num.toString()[0]) + parseInt(num.toString()[1]) + parseInt(num.toString()[2]);
  }

  // const result = parseInt(num.toString()[0]) + parseInt(num.toString()[1]);

  if (num > maxNumber) {
    return parseInt(num.toString()[0]) + parseInt(num.toString()[1]);
  } else {
    return num;
  }
};
