const greetings = (manager) => {
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
  manager.addDocument("en", "what's up gang", "greeting");

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
};

module.exports = greetings;
