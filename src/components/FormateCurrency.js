const formatcurrency = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
const FormateCurrency = (number) => {
  return formatcurrency.format(number);
};
export default FormateCurrency;
