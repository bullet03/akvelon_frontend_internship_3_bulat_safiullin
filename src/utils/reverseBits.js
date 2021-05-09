const reverseBits = (num) => {
  const binary = num.toString(2);
  const reverseBinary = binary.split("").reverse().join("");
  const result = parseInt(reverseBinary, 2);
  return result;
}

export default reverseBits;