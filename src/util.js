const formatCurrency = num => {
  if (String(num).indexOf('-') > -1) {
    return "(" + (Number(num) * -1).toLocaleString('en-Us') + ")";
  } else {
    return Number(num).toLocaleString('en-Us');
  }
}

export { formatCurrency }
