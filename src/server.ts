import Fastify from "fastify";
import dotenv from "dotenv";

dotenv.config();

const app = Fastify({
  logger: true,
});

app.get("/", async () => {
  return { message: "Running" };
});

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log("Server running on http://localhost:3000");
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

start();
