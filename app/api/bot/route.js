const manager = require("@/utils/chat-bot");
const { NextResponse } = require("next/server");

export const POST = async (req, res) => {
  const body = await req.json();
  const message = body.message;
  try {
    const response = await manager.process("en", message);
    return NextResponse.json({
      message: response.answer || "Can you come again?",
    });
  } catch (error) {
    return NextResponse.json("Something went wrong");
  }
};
