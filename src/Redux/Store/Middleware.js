import thunk from "redux-thunk";
const middleware = [thunk];

/* istanbul ignore next */

if (process.env.NODE_ENV !== "xdevelopment") {
  // eslint-disable-next-line global-require

  const { createLogger } = require("redux-logger");

  middleware.push(createLogger({ collapsed: true }));
}

export default middleware;
