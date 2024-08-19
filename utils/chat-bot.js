const { NlpManager } = require("node-nlp");
const greetings = require("./bot/greeting");
const updateProfile = require("./bot/updateProfile");

const manager = new NlpManager({ languages: ["en"] });
greetings(manager);
updateProfile(manager);
(async () => {
  await manager.train();
  manager.save(); // Save the model
})();

module.exports = manager;
