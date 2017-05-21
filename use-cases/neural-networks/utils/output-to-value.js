const outputToValue = (output) => {
  let greatest = null;
  let value = null;

  for (let index = 0; index < output.length; index++) {
    const item = output[index];
    if (item < greatest) return;
    greatest = item;
    value = index;
  }

  return value;
};

module.exports = outputToValue;
