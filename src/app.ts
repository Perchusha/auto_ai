import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Configuration, { OpenAI } from 'openai';
import { getRespondHtmlContainer } from './helpets';

const app = express();

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(morgan('dev'))
  .use(cors({ origin: '*' }))
  .get('/', (req, res) => {
    const newConfig = new Configuration({
      apiKey: process.env.GPT_KEY,
    });
    const openai = new OpenAI(newConfig);
    console.log(newConfig);

    res.status(200).send(getRespondHtmlContainer('Respond: ok'));
  });

export default app;
