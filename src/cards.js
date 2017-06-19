import Cards from './datasets/cards';

export default {

  all() {
    return Cards;
  },

  attackGreaterThan(attack = 5) {
    return this.all()
               .filter(card => {
                 return card.attack > attack;
               });
  },

  healthGreaterThan() {

  },

  byName() {
    const name = `Wild Magic`;
  }
};

