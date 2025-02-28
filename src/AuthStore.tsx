import createStore from "react-auth-kit";

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: "localhost",
  cookieSecure: false,

  debug: true,
});
export default store;
