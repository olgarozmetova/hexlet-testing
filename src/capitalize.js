const capitalize = (text) => {
  if (text === '') {
    return '';
  }

  const [firstChar, ...restChars] = text;
  return `${firstChar.toUpperCase()}${restChars.join('')}`;
};

capitalize('hello');

export default capitalize;
