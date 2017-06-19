import Test from 'ava';
import Cards from '../src/cards';

Test(`cards array is not empty`, t => {
  t.truthy(Cards.all().length > 0);
});

Test(`all cards with attack > 5`, t => {
  const cards = Cards.attackGreaterThan();
  t.truthy(cards.length > 0);
  t.truthy(cards[0].attack > 5);
});
