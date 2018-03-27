import express from 'express';
import makeId from './utils/makeId';
import ShortLink from './models/ShortLink';
import checkURL from './utils/checkURL';

const router = express.Router();
// create new shortened link in database
router.get('/new/*', async (req, res, next) => {
  let count;
  let random_id;
  do {
    random_id = makeId();
    count = await ShortLink.count({
      random_id
    });
  } while (count === 1); // change id if duplicates

  const link_href = encodeURI(req.params[0]);
  if (!checkURL(link_href)) {
    return res.status(400).send('Invalid link.');
  }
  const short = new ShortLink({
    random_id,
    link_href
  });

  const shortURL = req.protocol + '://' + req.hostname + '/' + random_id;
  short.save().then(() => res.send({ shortened_link: shortURL }));
});

// redirect to full link if user enter short link url
router.get('/:random_id', (req, res) => {
  ShortLink.findOne({
    random_id: req.params.random_id
  }).then(result => {
    if (result) {
      res.redirect(result.link_href);
    } else res.status(404).send('url not in database.');
  });
});

export default router;