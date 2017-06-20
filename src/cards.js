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
               // .map(card => (<div>{card.name}</div>))
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
};
