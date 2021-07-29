export default function howManyItems() {
  let arrLength = this.$store.getters.cartTotalItems
  let strLenght = arrLength.toString();
  strLenght = strLenght.split('')
  let last = strLenght[strLenght.length - 1];
  last = Number(last);
  let output = '';
  (arrLength >= 11 && arrLength <= 20) ? output = 'товаров' : (last === 1) ? output = 'товар' : (last > 1 && last <= 4) ? output = 'товарa' : output = 'товаров';
  return output
}
