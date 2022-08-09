import { apiUrl } from "./config.js";
import { getUserInfo } from "./localStorage.js";
import { showMessage } from "./utils.js";

export const getProduct = async (id) => {
  try {
    const res = await fetch(`${apiUrl}/api/product/${id}`);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const signin = async ({ email, password }) => {
  try {
    const res = await fetch(`${apiUrl}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();

    if (password === "") {
      showMessage("⚠️Introduceți o parolă!");
    } else if (email === "") {
      showMessage("⚠️Introduceți un e-mail!");
    }

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    showMessage("⚠️Conectarea nu a reușit");
  }
};

export const register = async ({ name, email, password }) => {
  try {
    const res = await fetch(`${apiUrl}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    const data = await res.json();

    if (password === "") {
      showMessage("⚠️Introduceți o parolă!");
    } else if (email === "") {
      showMessage("⚠️Introduceți un e-mail!");
    } else if (name === "") {
      showMessage("⚠️Introduceți un nume!");
    }
    return data;
  } catch (err) {
    showMessage("⚠️Inregistrarea nu a reușit");
  }
};

export const update = async ({ name, email, password }) => {
  try {
    const { id } = getUserInfo();
    const res = await fetch(`${apiUrl}/profile/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createOrder = async (order) => {
  try {
    const res = await fetch(`${apiUrl}/api/order`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) showMessage("✌️Comanda a fost plasată!");
    return data;
  } catch (err) {
    return { error: err.res ? err.res.data.message : err.message };
  }
};
