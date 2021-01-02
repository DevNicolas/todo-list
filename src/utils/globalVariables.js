const isAuth = () => {
  return sessionStorage.getItem("account") ? true : false;
};

const setAuth = (data) => {
  return sessionStorage.setItem("account", JSON.stringify(data));
};

const closeSesion = () => {
  return sessionStorage.clear();
};
export { isAuth, setAuth, closeSesion };
