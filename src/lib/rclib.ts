/* eslint-disable functional/no-let */
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

  private calcDiscount(subTot: number): number {
    const discount = this.lookupDiscountForVolume(subTot);
    const discountAmount = subTot * (discount / 100);
    return discountAmount;
  }

  calcTotalPrice(): number {
    this.subTot = this.calcSubTot(this.qty, this.price)
    const discountAmount = this.calcDiscount(this.subTot)
    this.subTot = this.subTot - discountAmount;

    return this.subTot // TODO: Fix interim calc
  }

  // Util
  private lookupDiscountForVolume(orderValue: number): number {
    let discount = 0;
    switch (true) {
      case orderValue < 1000:
        discount = 0;
        break;
      case orderValue < 5000:
        discount = 3;
        break;
      case orderValue < 7000:
        discount = 5;
        break;
      case orderValue < 10000:
        discount = 7;
        break;
      case orderValue >= 10000:
        discount = 10;
        break;
      default:
        break;
    }
    return discount;
  }


}