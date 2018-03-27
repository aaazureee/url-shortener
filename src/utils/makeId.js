const idLength = 6;
const makeId = () => {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < idLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

export default makeId;