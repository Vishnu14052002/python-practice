import express from 'express';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

const app = express();

const PORT = process.env.PORT ||  5003;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/', (req, res) => {
    res.sendFile (path.join(__dirname, 'public', 'index.html'))
});

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`)
})

