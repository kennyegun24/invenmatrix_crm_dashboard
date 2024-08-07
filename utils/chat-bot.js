const { NlpManager } = require("node-nlp");
// import { NlpManager } from "node-nlp";

const manager = new NlpManager({ languages: ["en"] });

manager.addDocument("en", "hello", "greeting");
manager.addDocument("en", "hi", "greeting");
manager.addDocument("en", "hey there", "greeting");
manager.addDocument("en", "good day", "greeting");
manager.addDocument("en", "good morning", "greeting");
manager.addDocument("en", "good afternoon", "greeting");
manager.addDocument("en", "good evening", "greeting");
manager.addDocument("en", "howdy", "greeting");
manager.addDocument("en", "what's up", "greeting");
manager.addDocument("en", "hey", "greeting");
manager.addDocument("en", "hiya", "greeting");
manager.addDocument("en", "greetings", "greeting");
manager.addDocument("en", "hi there", "greeting");
manager.addDocument("en", "yo", "greeting");
manager.addDocument("en", "sup", "greeting");

manager.addDocument(
  "en",
  "How can I edit my personal informaiton?",
  "update_profile"
);
manager.addDocument("en", "How can I edit my name?", "update_profile");
manager.addDocument(
  "en",
  "How can I change my personal information?",
  "update_profile"
);
manager.addDocument(
  "en",
  "Where can I go to change my profile picture?",
  "update_profile"
);
manager.addDocument(
  "en",
  "How do I update my profile information?",
  "profile_update"
);
manager.addDocument("en", "Can I change my username?", "profile_update");
manager.addDocument(
  "en",
  "How do I update my email address?",
  "profile_update"
);
manager.addDocument(
  "en",
  "How can I change my profile picture?",
  "profile_update"
);
manager.addDocument(
  "en",
  "Where can I edit my contact information?",
  "profile_update"
);
manager.addDocument("en", "How do I update my phone number?", "profile_update");
manager.addDocument("en", "Can I change my password?", "profile_update");
manager.addDocument("en", "How do I update my address?", "profile_update");
manager.addDocument(
  "en",
  "Where can I update my billing information?",
  "profile_update"
);
manager.addDocument(
  "en",
  "Can I add additional information to my profile?",
  "profile_update"
);
manager.addDocument(
  "en",
  "Can I link my social media accounts to my profile?",
  "profile_update"
);
manager.addDocument("en", "How do I deactivate my account?", "profile_update");
manager.addDocument("en", "Can I set my profile to private?", "profile_update");
manager.addDocument(
  "en",
  "Where can I update my security questions?",
  "profile_update"
);
manager.addDocument(
  "en",
  "Can I change my profile visibility settings?",
  "profile_update"
);
manager.addDocument(
  "en",
  "How do I update my language preference?",
  "profile_update"
);

manager.addAnswer("en", "greeting", "Good evening! How can I assist you?");
manager.addAnswer("en", "greeting", "Howdy! What can I help you with?");
manager.addAnswer("en", "greeting", "What's up? How can I assist you?");
manager.addAnswer("en", "greeting", "Hey! What do you need help with?");
manager.addAnswer("en", "greeting", "Hiya! How can I be of service?");
manager.addAnswer("en", "greeting", "Greetings! How may I help you today?");
manager.addAnswer("en", "greeting", "Hi there! What can I do for you?");
manager.addAnswer("en", "greeting", "Yo! How can I assist you?");
manager.addAnswer("en", "greeting", "Sup! How can I help you today?");
manager.addAnswer(
  "en",
  "greeting",
  "Hello there my friend, How may I be of help to you today?"
);
manager.addAnswer("en", "greeting", "Hi! How can I assist you today?");
manager.addAnswer("en", "greeting", "Hey there! What can I do for you?");
manager.addAnswer("en", "greeting", "Good day! How may I assist you?");
manager.addAnswer("en", "greeting", "Good morning! How can I help?");
manager.addAnswer(
  "en",
  "greeting",
  "Good afternoon! What can I do for you today?"
);

(async () => {
  await manager.train();
  manager.save(); // Save the model
})();

module.exports = manager;
