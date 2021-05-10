const taskFunctions = [
  `
  const factorial = (num) => {
      let result = 1;
      for (let i = 1; i <= num; i += 1) {
        result = result * i;
      }
      return result;
  };

            *can also use recursion
          `,
  `
    const reverseBits = (num) => {
        const binary = num.toString(2);
        const reverseBinary = binary.split("").reverse().join("");
        const result = parseInt(reverseBinary, 2);
        return result;
    }
          `,
  `
  const uniqueWords = (str) => {
      const arrFromStr = str.split(" ");
      const result = arrFromStr.filter(
        (word, index, array) => array.indexOf(word) === index
      );
      return result.join(" ");
  };

            *can also use set and for
          `
];

export default taskFunctions;