
const typeSeparator = (data) => {
  const result = {
    even_numbers: [],
    odd_numbers: [],
    alphabets: [],
    special_characters: [],
    sum: 0,
    concat_string: ''
  };

  const letters = [];

  for (const item of data) {
    const str = item.toString();

    if (/^\d+$/.test(str)) {
      const num = Number(str);
      result.sum += num;
      (num % 2 === 0 ? result.even_numbers : result.odd_numbers).push(str);
    } 
    else if (/^[a-zA-Z]$/.test(str)) {
      result.alphabets.push(str.toUpperCase());
      letters.unshift(str);
    } 
    else {
      result.special_characters.push(str);
    }
  }

  result.concat_string = letters
    .map((ch, i) => i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase())
    .join('');

  result.sum = result.sum.toString();

  return result;
};

module.exports = { typeSeparator };
