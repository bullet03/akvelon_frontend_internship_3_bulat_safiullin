//we can solve it in 3 different ways: recursive process, iteractive process and using for;

const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i += 1) {
    result = result * i;
  }
  return result;
};

export default factorial;