import Test from 'ava';
import Cards from '../src/cards';

Test(`cards array is not empty`, t => {
  t.truthy(Cards.all().length > 0);
});

Test(`all cards with attack > 5`, t => {
  const attack = 5;
  const cards = Cards.attackGreaterThan(attack);
  t.truthy(cards.length > 0);
  t.truthy(cards[0].attack > attack);
});

Test(`health is greater than 2`, t => {
  const health = 2;
  const cards = Cards.healthGreaterThan(health);
  t.truthy(cards.length > 0);
  t.truthy(cards[1].health > health);
});

Test(`byName finds 'Wild Magic'`, t => {
  const name = 'Wild Magic';
  const cards = Cards.byName(name);

  t.truthy(cards.length > 0);
  t.truthy(cards[0].name === name);
});

Test('map with {id, name}', t => {
  const cards = Cards.simplify();

  const first = cards[0];
  t.is(Object.keys(first).length, 2);
});

Test(`add a number to an []`, t => {
  const onlyOneNumber = [1];
  t.deepEqual(onlyOneNumber, [1]);

  const primes = [...onlyOneNumber, 3, 5, 7];
  t.deepEqual(primes, [1, 3, 5, 7]);
  t.deepEqual(onlyOneNumber, [1]);
});

Test(`add a number to an []`, t => {
  const onlyOneNumber = [1];
  t.deepEqual(onlyOneNumber, [1]);

  const primes = [3, 5, 7, ...onlyOneNumber];
  t.deepEqual(primes, [3, 5, 7, 1]);
  t.deepEqual(onlyOneNumber, [1]);
});

Test(`find odd numbers between 1 - 10`, t => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const odds = [...numbers.filter(n => n % 2 === 1)];
  t.deepEqual(odds, [1, 3, 5, 7, 9]);
});

Test(`findById`, t => {
  const id = `BRMA13_4_2_TB`;
  const card = Cards.findById(id);
  t.is(card.id, id);
  t.falsy(Array.isArray(card));
});

Test(`add will add a card to the existing array of cards`, t => {
  const card = {
    dbfId: 11111,
    id: 'TYLER',
    name: 'The Kabal',
    playerClass: 'NEUTRAL',
    set: 'TB',
    type: 'ENCHANTMENT',
  };

  const originalLength = Cards.all().length;
  const results = Cards.add(card);

  t.not(originalLength, results.length);
  t.deepEqual(results[results.length - 1], card);
});

Test(`update a card that is known `, t => {
  const id = `BRMA13_4_2_TB`;
  const card = {
    'cost': 2,
    'dbfId': 31095,
    'id': id,
    'name': 'Tyler',
    'playerClass': 'NEUTRAL',
    'set': 'TB',
    'text': '<b>Hero Power</b>\nPut a random spell from your opponent\'s class into your hand.',
    'type': 'HERO_POWER',
  };

  const results = Cards.update(id, card);
  const updatedCard = results.filter(c => c.id === card.id).reduce((previous, current) => current);

  t.deepEqual(updatedCard, card);
});

Test(`delete by an id`, t => {
  const id = `BRMA13_4_2_TB`;
  const cards = Cards.delete(id);
  // t.not(Cards.all().length, cards.length);
  t.falsy(cards.some(card => card.id === id));
});
