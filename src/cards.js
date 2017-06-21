import Cards from './datasets/cards';

export default {

  all() {
    return Cards;
  },

  attackGreaterThan(attack) {
    return this.all().filter(card => {
      // Do something with attack then filter
      return card.attack > attack;
    });
  },

  healthGreaterThan(health) {
    return this.all().filter(card => card.health > health);
  },

  byName(name) {
    return this.all().filter(card => card.name === name);
  },

  findById(id) {
    return this.all()
               .filter(card => card.id === id)
               .reduce((previous, current) => current, {});
    // .map(card => ({ id: card.id, name: card.name))
  },

  simplify() {
    return this.all()
               .map(original => {
                 return {
                   id: original.id,
                   name: original.name,
                 };
               });
  },

  add(card = {}) {
    const cards = this.all();
    return [...cards, card];
  },

  update(id, card) {
    return this.all()
               .map(original => {
                 if (original.id === id)
                   return Object.assign({}, original, card);

                 return original;
               });
  },

  delete(id) {
    const cards = this.all().filter(card => card.id !== id);
    return [...cards];
  }

};
