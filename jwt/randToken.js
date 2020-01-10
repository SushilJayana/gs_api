const getRandomToken = (length, chars) => {
  let keyChars =
    chars === null
      ? "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*(){}_-"
      : chars;
  var result = "";
  for (var i = length; i > 0; --i)
    result += keyChars[Math.floor(Math.random() * keyChars.length)];
  return result;
};

module.exports = getRandomToken;
