import { addAnswers, addGreetingDocuments } from "./prompts/greetings";

const { NlpManager } = require("node-nlp");
// const { addGreetingDocuments, addAnswers } = require("./prompts/greetings");
// const addGreetingDocuments = require("./greetings");
// const addUpdateProfileDocuments = require("./updateProfile");
// const addAnswers = require("./answers");

export const manager = new NlpManager({ languages: ["en"] });

// Add documents and answers
addGreetingDocuments(manager);
// addUpdateProfileDocuments(manager);
addAnswers(manager);

(async () => {
  await manager.train();
  manager.save();
})();

// module.exports = manager;
