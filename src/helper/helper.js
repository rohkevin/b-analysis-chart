export const compareMonths = (a,b) => {
  if (a.month < b.month) {
    return -1;
  }
  if (a.month > b.month) {
    return 1;
  }
  else {
    return 0;
  }
}