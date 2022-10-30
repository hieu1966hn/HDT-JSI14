/// import ..



const routes = {
  "/": {
    body: "./routes/home.html",
    requireAuth: false,
    notRequireAuth: false,
  },
  "/login": {
    body: "./routes/login.html",
    requireAuth: false,
    notRequireAuth: true,
  },
  "/register": {
    body: "./routes/register.html",
    requireAuth: false,
    notRequireAuth: true,
  },
  "/post/:id": {
    body: "./routes/post.html",
    requireAuth: false,
    notRequireAuth: false,
  },
  "/create": {
    body: "./routes/create.html",
    requireAuth: true,
    notRequireAuth: false,
  },


}