import express from 'express';
import serverRenderer from './middlewares/renderer';

const PORT = process.env.PORT || 3006;
const path = require('path');

const app = express();
const router = express.Router();

router.use('^/$', serverRenderer);

router.use(express.static(
    path.resolve(__dirname, '..', '..','build'),
    { maxAge: '30d' },
));

app.use(router);

app.listen(PORT, (error) => {
    if (error) {
        return console.log('Something bad happened', error);
    }
    console.log(`Listening on port: ${PORT}`);
});