import Moment from 'moment';
import Cards from './datasets';
import Sets from './datasets/sets';


const between = (start, end, set) => Moment(set.releaseDate, 'YYYY-MM-DD').isBetween(start, end);

export const allCards = async() => await Cards();

export const allSets = async() => await new Promise(resolve => resolve(Sets));

export const filterSetsBetween = async(start, end) => (await allSets()).filter(set => between(start, end, set));

export const filterBySet = async set => (await allCards())[set];

export const cardsInSet = async set => (await filterBySet(set))['cards'];





// artist: 'Richard Thomas',
//   cmc: 5,
//   colorIdentity: [ 'U' ],
//   colors: [ 'Blue' ],
//   flavor: 'These spirits of the air are winsome and wild, and cannot be truly contained. Only marginally intelligent, they often substitute whimsy for strategy, delighting in mischief and mayhem.',
//   id: '926234c2fe8863f49220a878346c4c5ca79b6046',
//   imageName: 'air elemental',
//   layout: 'normal',
//   manaCost: '{3}{U}{U}',
//   mciNumber: '47',
//   multiverseid: 94,
//   name: 'Air Elemental',
//   power: '4',
//   rarity: 'Uncommon',
//   subtypes: [ 'Elemental' ],
//   text: 'Flying',
//   toughness: '4',
//   type: 'Creature — Elemental',
//   types: [ 'Creature' ] },
