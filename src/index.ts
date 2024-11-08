import { serveStatic } from "hono/bun";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.html(`
<html>
  <head>
    <title>Ohai Hono Bun</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  </head>
  <body>
    <h1>hi, hono</h1>
</html>
                `);
});

app.use("/static/*", serveStatic({ path: "./" }));
app.use("/favicon.svg", serveStatic({ path: "./static/favicon.svg" }));

export default {
  port: 3001,
  fetch: app.fetch,
};
