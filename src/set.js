const set = (obj, key, value) => {
  if (!(key in obj)) {
    return { ...obj, [key]: value };
  }
  return obj;
};

export default set;
