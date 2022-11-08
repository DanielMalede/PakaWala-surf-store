const CURRENCY = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
export default function formatCurrency(number) {
  return CURRENCY.format(number);
}
