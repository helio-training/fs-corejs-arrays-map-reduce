import MTG from 'mtgjson';

export default async() => {
  return await new Promise((resolve, reject) => {
    MTG((err, data) => {
      if (err) return reject(err);

      return resolve(data);
    })
  });
}
