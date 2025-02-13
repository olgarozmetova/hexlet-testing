const capitalize = (text) => {
  const [firstChar, ...restChars] = text;
  return `${firstChar.toUpperCase()}${restChars.join('')}`;
};

capitalize('hello');
capitalize('how are you');

export default capitalize;
