const registrationMiddleware = (store) => (next) => (action) => {
  if (action.type === "user/register") {
    const { email } = action.payload;
    const users = store.getState().user.users;

    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      alert("Такой пользователь уже существет! попробуйте другой логин.");
      return;
    }

    alert("Вы Зарегестрировались!!!");
  }

  return next(action);
};

export default registrationMiddleware;;
