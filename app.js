const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const axios = require('axios');
const port = 3000
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {movies:[]});
})
app.post('/recommend', async (req, res) => {
    const genre = req.body.genre;
    const api_key = process.env.API_KEY;

    try{
        const response = await axios.get("https://api.themoviedb.org/3/discover/movie", {
            params: {
                api_key: api_key,
                with_genres: genre,
                language: 'en-US',
                page: 1

            }
            
        });
        const movies = response.data.results;
        res.render('index', {movies});
    }catch (err){
        console.error(err);
        res.status(500).send('Erro na API');
    }

});

app.listen(port, () => {
    console.log(`Running the sistem on ${port}`);
})