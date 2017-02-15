import Test from 'ava';
import * as Assignment from '../src';
import Moment from 'moment';

Test('#filterSetsBetween(start, end) retrieves sets within a range',async t => {
  const start = Moment('2016-01-01', 'YYYY-MM-DD');
  const end = Moment('2017-01-01', 'YYYY-MM-DD');

  const sets = await Assignment.filterSetsBetween(start, end);
  t.is(sets.length, 13);
});


Test('#allCards() retrieves allCards the cards information', async t => {
  const sets = await Assignment.allCards();
  t.truthy(sets);
});


Test('#filterBySet(set) has only cards in the set', async t => {
  const set = 'LEA';
  const result = await Assignment.filterBySet(set);
  console.log(result);
  t.is(result.name, 'Limited Edition Alpha');
});


Test('#cardsInSet(set) has only cards in the set', async t => {
  const set = 'LEA';
  const result = await Assignment.cardsInSet(set);
  console.log(result);
  t.is(result.length, 295);
});
