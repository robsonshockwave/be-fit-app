const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
  checkToken: async token => {
    const req = await fetch(`${BASE_API}/auth/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token}),
    });
    const json = await req.json();
    return json;
  },
  signIn: async (email, password) => {
    const req = await fetch(`${BASE_API}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });
    const json = await req.json();
    return json;
  },
  signUp: async (name, email, password /*, age*/) => {
    const req = await fetch(`${BASE_API}/user/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password /*, age*/}),
    });
    const json = await req.json();
    return json;
  },
  attAccountData: async (name, password, id) => {
    const req = await fetch(`${BASE_API}/user/gymstudent/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, password}),
    });
    const json = await req.json();
    return json;
  },
};
