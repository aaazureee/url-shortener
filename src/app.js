import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import router from './router';
mongoose.Promise = global.Promise;

const app = express();
app.use(compression());
app.use(express.static(__dirname + '/assets'));
mongoose.connect('mongodb://test:test@ds123129.mlab.com:23129/link-shortener');
mongoose.connection.once('open', () => {
  console.log('Connection has been made...');
}).on('error', err => console.log(err));

app.use('/', router);
app.use((req, res, next) => {
  res.status(404).send('404 Page not found.');
});

const listener = app.listen(process.env.PORT || 3000, () =>
  console.log('Listening on port ' + listener.address().port)
);



