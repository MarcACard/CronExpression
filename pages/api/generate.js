import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

const logger = require("pino")();

// TODO: Build handler to determine if user input is requesting a cron expressoin or asking for an explanation.
const basePromptPrefix =
  "Using the description below create a Crontab Expression, only provide the expression and exclude command to run a specific program. If no time frequency information is provide prompt the user for more information saying: 'Insufficient information provided. Please add more details and try again'.\n\nDescription:\n";

const generateAction = async (req, res) => {
  // Return 400 if request body is empty
  if (!req.body) {
    logger.error("API: No request body provided.");
    res.status(400).json({
      output:
        "Insufficient information provided. Please add more details and try again",
    });
    return;
  }

  // Check if API key is configured
  if (!process.env.OPENAI_API_KEY) {
    logger.error("API: OpenAI API key is missing");
    res.status(500).json({
      output:
        "Server configuration error: OpenAI API key is not configured. Please contact the administrator.",
    });
    return;
  }

  try {
    // Call OpenAI API
    logger.info(`API: Query Submitted - ${req.body.userInput}`);
    logger.info("API: Calling OpenAI API");
    const result = await generateObject({
      model: openai("gpt-5-nano-2025-08-07", {
        apiKey: process.env.OPENAI_API_KEY,
      }),
      providerOptions: {
        openai: {
          effort: "none",
          verbosity: "low",
          store: false,
          summary: false,
        },
      },
      schema: z.object({
        croneExpression: z.string(),
      }),
      prompt: `${basePromptPrefix}${req.body.userInput}\nCrontab Expression:\n`,
    });
    logger.info("API: OpenAI API Call Complete");

    logger.info(
      `API: Returning Response to Client - "${result.object.croneExpression}"`
    );
    res.status(200).json({ output: result.object.croneExpression });
  } catch (error) {
    logger.error(`API: Error calling OpenAI - ${error.message}`);
    res.status(500).json({
      output:
        "An error occurred while generating the cron expression. Please try again later.",
    });
  }
};

export default generateAction;
