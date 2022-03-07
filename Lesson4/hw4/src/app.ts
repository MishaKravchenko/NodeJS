import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log(2);
});

app.listen(5500, () => {
    console.log('Server has started!!!!');
});
