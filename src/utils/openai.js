import OpenAI from "openai";
import { ABBA_AI_KEY } from "./constant";
const openai = new OpenAI({
  apiKey: ABBA_AI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openai;
