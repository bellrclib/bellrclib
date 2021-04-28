/* eslint-disable functional/immutable-data */
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
  subTot: number

  constructor(qty: number, price: number, provStateCode: string) {
    this.qty = qty;
    this.price = price;
    this.provStateCode = provStateCode;
    this.subTot = 0
  }

  private calcSubTot(qty: number, price: number): number {
    const subTot = qty * price;
    return subTot;
  }

  calcTotalPrice(): number {
    this.subTot = this.calcSubTot(this.qty, this.price)

    return this.subTot // TODO: Fix interim calc
  }

}