import test from 'ava';

import { ResellerCosts } from './rclib';

// ## Example 1:
//     Input:  500 items, $1 per item, Ontario
//     Output: $565.00
test('should calc total price for 500 items @ $1 in ON', (t) => {
  let rc = new ResellerCosts(500,1,'ON');

  t.is(rc.calcTotalPrice(), 565);
});


// ## Example 2:
//     Input:  3600 items, $2.25 per item, Michigan
//     Output: $7984.98
test('should calc total price for 3600 items @ $2.25 in MI', (t) => {

  let rc = new ResellerCosts(3600, 2.25, 'MI');

  t.is(rc.calcTotalPrice(), 7984.98);
});
