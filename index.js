const { MongoClient } = require("mongodb");
const Koa = require("koa");
const Router = require("koa-router");

async function run() {
  console.log("---------------------------------------");
  console.log("Running MongoDB with NodeJS");
  console.log("---------------------------------------");
  const client = new MongoClient(process.env["MONGO_URL"], {
    useUnifiedTopology: true,
  });
  await client.connect();
  console.log("---------------------------------------");
  console.log("Connected to MongoDB");
  console.log("---------------------------------------");
  const db = client.db("test");
  const collection = db.collection("documents");
  const docCount = await collection.countDocuments();
  console.log("---------------------------------------");
  console.log("Document count: " + docCount);
  console.log("---------------------------------------");
  client.close();

  const app = new Koa();
  const router = new Router();

  router.get("/", async (ctx, next) => {
    ctx.body = "Hello World! 🥰";
  });

  app.use(router.routes()).use(router.allowedMethods());

  app.listen(3000, () => {
    console.log("---------------------------------------");
    console.log("Server running on port 3000");
    console.log("---------------------------------------");
  });
}

run().catch(console.dir);
