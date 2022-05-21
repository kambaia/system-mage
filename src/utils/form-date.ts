export const formatDate = (date: string) => {
  let d = new Date(date);
  const datestring =
    ('0' + d.getDate()).slice(-2) +
    '-' +
    ('0' + (d.getMonth() + 1)).slice(-2) +
    '-' +
    d.getFullYear();
    return datestring;
};


