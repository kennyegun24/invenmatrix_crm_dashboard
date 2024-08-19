import { manager } from "./chat-bot";
const { NextResponse } = require("next/server");

export const POST = async (req, res) => {
  const body = await req.json();
  const message = body.message;
  console.log(message);
  try {
    const response = await manager.process("en", message);
    console.log(response);
    return NextResponse.json({
      message: response.answer || "Can you come again?",
      id: "chat-bot",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Something went wrong");
  }
};
