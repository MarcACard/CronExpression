import { Configuration, OpenAIApi } from "openai";

const logger = require("pino")();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// TODO: Build handler to determine if user input is requesting a cron expressoin or asking for an explanation.
const basePromptPrefix =
  "Using the description below create a Crontab Expression, only provide the expression and exclude command to run a specific program. If no time frequency information is provide prompt the user for more information saying: 'Insufficient information provided. Please add more details and try again'.\n\nDescription:";
const generateAction = async (req, res) => {
  // Return 400 if request body is empty
  if (!req.body) {
    logger.error("API: No request body provided.");
    res
      .status(400)
      .json({
        output:
          "Insufficient information provided. Please add more details and try again",
      });
  }
  // Call OpenAI API
  logger.info(`API: Query Submitted - ${req.body.userInput}`);
  logger.info("API: Calling OpenAI API");
  const baseCompletion = await openai.createCompletion({
    model: "gpt-3.5-turbo-instruct",
    prompt: `${basePromptPrefix}${req.body.userInput}\nCrontab Expression:\n`,
    temperature: 0.7,
    max_tokens: 250,
  });
  logger.info("API: OpenAI API Call Complete");
  const basePromptOutput = baseCompletion.data.choices.pop();

  logger.info(`API: Returning Response to Client - "${basePromptOutput.text}"`);
  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
