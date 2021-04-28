/* eslint-disable prefer-const */
/* eslint-disable functional/no-let */
// tslint:disable:no-expression-statement

import test from 'ava';

import { ResellerCosts } from './rclib';

/**
 * Test cases illustrating two scenarios with different volumes
 * and different tax rates for different prov/states.
 *
 */

// ## Example 1:
//     Input:  500 items, $1 per item, Ontario
//     Output: $565.00
test('should calc total price for 500 items @ $1 in ON', (t) => {
  const qty = 500;
  const price = 1;
  const provState = 'ON';
  let rc = new ResellerCosts(qty, price, provState);

  t.is(rc.calcTotalPrice(), 565);
});

// ## Example 2:
//     Input:  3600 items, $2.25 per item, Michigan
//     Output: $7984.98
test('should calc total price for 3600 items @ $2.25 in MI', (t) => {
  const qty = 3600;
  const price = 2.25;
  const provState = 'MI';
  let rc = new ResellerCosts(qty, price, provState);

  t.is(rc.calcTotalPrice(), 7984.98);
});
