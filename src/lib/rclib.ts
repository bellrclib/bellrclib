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
  subTot: number;
  totPrice: number;

  constructor(qty: number, price: number, provStateCode: string) {
    this.qty = qty;
    this.price = price;
    this.provStateCode = provStateCode;
    this.subTot = 0;
    this.totPrice = 0;
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

  private calcTaxes(provStateCode: string, discSubTot: number): number {
    const taxRate = this.lookupTaxRate(provStateCode);
    const taxedAmount = discSubTot * (taxRate / 100);
    return taxedAmount;
  }

  calcTotalPrice(): number {
    this.subTot = this.calcSubTot(this.qty, this.price);
    const discountAmount = this.calcDiscount(this.subTot);
    this.subTot = this.subTot - discountAmount;
    const taxAmount = this.calcTaxes(this.provStateCode, this.subTot);
    this.totPrice = this.subTot + taxAmount
    return this.totPrice
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

  private lookupTaxRate(provStateCode: string): number {
    let taxRate = 0;
    switch (provStateCode) {
      case 'AB':
        taxRate = 5;
        break;
      case 'ON':
        taxRate = 13;
        break;
      case 'QC':
        taxRate = 14.975;
        break;
      case 'MI':
        taxRate = 6;
        break;
      case 'DE':
        taxRate = 0;
        break;
      default:
        break;
    }
    return taxRate;
  }
}
