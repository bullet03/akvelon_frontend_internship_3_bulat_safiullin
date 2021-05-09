// we cav solve this task in 3 ways: set, filter and for

const uniqueWords = (str) => {
  const arrFromStr = str.split(" ");
  const result = arrFromStr.filter(
    (word, index, array) => array.indexOf(word) === index
  );
  return result.join(" ");
};

export default uniqueWords;