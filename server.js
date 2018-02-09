import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8080;

// Log with Morgan
app.use(morgan('dev'));

// Accept encoded data as well as json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static(__dirname + '/dist'));

const imageList = [
  {
    key: 0,
    url: "ADD"
  },
  {
    key: 1,
    url: "ADD"
  },
  {
    key: 2,
    url: "ADD"
  }
];

app.route('/image')
    .get((req, res) => res.json(imageList))
    .post((req, res) => {
      const { url } = req.body;
      imageList.push({
        key: imageList.length,
        url
      });
      res.json({
        success: 1,
        message: 'Image Successfully added!'
      });
    });
app.listen(port);
console.log('listening on port ${port}');
