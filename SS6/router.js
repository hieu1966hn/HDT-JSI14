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
};

const isMatchRoute = (route, pathname) => {
  const parsed = route.replace(/\/:[^\/]+/gm, "/[^\\/]+");

  const regex = new RegExp(`^${parsed}\\/?$`, "gm");
  const isMatching = regex.test(pathname);

  let params = {};

  if (isMatching) {
    const routeMatches = route.match(/\/[^\\\/]+/gm) || [];
    const pathnameMatches = pathname.match(/\/[^\\\/]+/gm) || [];
  }
}
