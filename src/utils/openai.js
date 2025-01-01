import OpenAI from 'openai';
import { someKey } from './constants';

const client = new OpenAI({
  apiKey: someKey,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});

export default client;