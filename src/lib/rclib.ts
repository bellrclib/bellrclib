/* eslint-disable functional/no-class */
/* eslint-disable functional/prefer-readonly-type */
/* eslint-disable functional/no-this-expression */

/**
 * ResellerCosts provides the functionality to calculate prices for products
 * 
 *  Inputs
 *    - number of items
 *    - price per item
 *    - 2-letter province/state code
 */

 export class ResellerCosts {

  qty: number;
  price: number;
  provStateCode: string;

  constructor(qty: number, price: number, provStateCode: string) {
    this.qty = qty;
    this.price = price;
    this.provStateCode = provStateCode;
  }

  calcTotalPrice(): number {
    return 0
  }

}