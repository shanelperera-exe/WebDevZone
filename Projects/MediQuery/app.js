import express from 'express';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/search', async (req, res) => {
  const drugName = req.body.drugName;

  try {
    const response = await axios.get('https://api.fda.gov/drug/label.json', {
      params: {
        search: `openfda.generic_name:"${drugName}"`,
        limit: 1
      }
    });

    const drug = response.data.results[0];
    console.log(drug);
    res.render('result', { drug });
  } catch (error) {
    console.error(error.message);
    res.render('result', { error: 'Drug not found or API error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});