export default function formatCurrency(value, currency) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency });
}
