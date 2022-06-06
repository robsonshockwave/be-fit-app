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
  signUp: async (name, email, password, goals, personalId) => {
    const req = await fetch(`${BASE_API}/api/gymstudent/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password, goals, personalId}),
    });
    const json = await req.json();
    return json;
  },
  attAccountData: async (name, password, id) => {
    const req = await fetch(`${BASE_API}/api/gymstudent/${id}`, {
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
  deleteStudent: async id => {
    const req = await fetch(`${BASE_API}/api/gymstudent/delete`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id}),
    });
    const json = await req.json();
    return json;
  },
  getListStudents: async id => {
    const req = await fetch(`${BASE_API}/api/gymstudent/load`, {
      method: 'GET',
      // headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify({id}),
    });
    const json = await req.json();
    return json;
  },
};
