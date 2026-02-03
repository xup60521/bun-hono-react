import { Hono } from "hono";


const app = new Hono().basePath('/api').get("/hello", (c) => {
  return c.json({ message: "Hello from Hono!" });
})

export default app;