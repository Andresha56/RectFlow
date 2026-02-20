import { NODE_TYPES_ENUM } from "./node-types";

export const NODE_DESCRIPTIONS = {
    [NODE_TYPES_ENUM.DELAY]:
        "Pauses the workflow for a specified number of seconds before passing execution to the next node",

    [NODE_TYPES_ENUM.TEXT]:
        "Formats or combines text values to pass downstream",

    [NODE_TYPES_ENUM.CONDITION]:
        "Evaluates a condition and routes execution based on true or false",

    [NODE_TYPES_ENUM.INPUT]: "Pass data of different types into your workflow",

    [NODE_TYPES_ENUM.API]:
        "Makes an external API request and passes the response to the next node",

    [NODE_TYPES_ENUM.MATH]:
        "Performs mathematical operations on numeric inputs",

    [NODE_TYPES_ENUM.TRANSLATE]: "Translates text from one language to another",

    [NODE_TYPES_ENUM.LLM]:
        "Processes input using a language model to generate a response",

    [NODE_TYPES_ENUM.OUTPUT]:
        "Outputs the final result of the workflow execution",
};
