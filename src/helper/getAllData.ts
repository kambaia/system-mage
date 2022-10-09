export const getDate = () => {
  let year = [];
  let dt = new Date();
  for (let index = dt.getFullYear(); index <= 2035; index++) {
    year.push({
      label: index,
      value: index
    });
  }
  return year;
};
