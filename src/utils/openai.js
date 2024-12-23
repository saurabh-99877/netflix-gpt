import OpenAI from 'openai';
import { SECRET_KEY } from './constants';

const client = new OpenAI({
  apiKey: SECRET_KEY,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});

export default client;