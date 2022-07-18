const BASE_API = 'https://api-be-fit-dev.up.railway.app';
// const BASE_API = 'http://10.0.2.2:3000';

export default {
  checkToken: async token => {
    const req = await fetch(`${BASE_API}/api/refresh`, {
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
  signIn: async (email, password, useType) => {
    try {
      let res = await fetch(`${BASE_API}/api/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password, useType}),
      });
      console.log(res);
      return await res.json();
    } catch (err) {
      console.log('deu erro', err);
      return;
    }
  },
  signUp: async (name, email, password, goals, personalId, token) => {
    try {
      let res = await fetch(`${BASE_API}/api/gymstudent/create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          name,
          email,
          password,
          goals,
          PersonalId: personalId.toString(),
        }),
      });
      console.log(res);
      return await res.json();
    } catch (err) {
      console.log('deu erro', err);
      return;
    }
  },
  getProfileStudent: async (id, token) => {
    try {
      let res = await fetch(`${BASE_API}/api/gymstudent/load`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          id: id.toString(),
        }),
      });
      console.log(res);
      return await res.json();
    } catch (err) {
      console.log('deu erro', err);
      return;
    }
  },
  getProfilePersonal: async (id, token) => {
    try {
      let res = await fetch(`${BASE_API}/api/personal/list/${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      });
      console.log(res);
      return await res.json();
    } catch (err) {
      console.log('deu erro', err);
      return;
    }
  },
  getListStudents: async (id, token) => {
    try {
      let res = await fetch(`${BASE_API}/api/gymstudent/list/${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      });
      console.log(res, 'LISTA DE ESTUDANTES');
      return await res.json();
    } catch (err) {
      console.log('deu erro', err);
      return;
    }
  },
  deleteStudent: async (id, token) => {
    try {
      let res = await fetch(`${BASE_API}/api/gymstudent/delete`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify({id: id.toString()}),
      });
      console.log(res);
      return await res.json();
    } catch (err) {
      console.log('deu erro', err);
      return;
    }
  },
  attAccountDataStudent: async (name, password, id, token) => {
    try {
      let res = await fetch(`${BASE_API}/api/gymstudent/update/${id}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify({name, password}),
      });
      console.log(res);
      return await res.json();
    } catch (err) {
      console.log('deu erro', err);
      return;
    }
  },
  attAccountDataPersonal: async (name, password, email, id, token) => {
    try {
      let res = await fetch(`${BASE_API}/api/personal/update/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify({name, password, email}),
      });
      return await res.json();
    } catch (err) {
      console.log('deu erro', err);
      return;
    }
  },
  getAllVideos: async (id, token) => {
    try {
      let res = await fetch(`${BASE_API}/api/video/list/${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      });
      return await res.json();
    } catch (err) {
      console.log('deu erro', err);
      return;
    }
  },
  uploadVideo: async file => {
    try {
      let res = await fetch(`${BASE_API}/api/video/upload/aws`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: file,
      });
      return await res.json();
    } catch (err) {
      console.log('deu erro', err);
      return;
    }
  },
  createTraining: async (category, name, url, PersonalId, token) => {
    try {
      let res = await fetch(`${BASE_API}/api/video/create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify({category, name, url, PersonalId}),
      });
      return await res.json();
    } catch (err) {
      console.log('deu erro', err);
      return;
    }
  },
  deleteTraining: async (id, token) => {
    try {
      let res = await fetch(`${BASE_API}/api/video/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      });
      return await res.json();
    } catch (err) {
      console.log('deu erro', err);
      return;
    }
  },
  addProgressStudent: async (token, values) => {
    const {
      weightField,
      heightField,
      armsField,
      legsField,
      waistField,
      gymStudentId,
    } = values;
    console.log(token, values, 'token');
    try {
      let res = await fetch(`${BASE_API}/api/datastudent/create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          weightField: parseFloat(weightField),
          heightField: parseFloat(heightField),
          armsField: parseFloat(armsField),
          legsField: parseFloat(legsField),
          waistField: parseFloat(waistField),
          gymStudentId,
        }),
      });

      return await res.json();
    } catch (err) {
      console.log('deu erro', err);
      return;
    }
  },
  getListProgress: async (id, token) => {
    try {
      let res = await fetch(`${BASE_API}/api/datastudent/list/${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      });
      return await res.json();
    } catch (err) {
      console.log('deu erro', err);
      return;
    }
  },
  addTrainingToStudent: async (
    day,
    gymStudentId,
    category,
    token,
    PersonalId,
  ) => {
    try {
      let res = await fetch(`${BASE_API}/api/workout/create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          category,
          day,
          PersonalId: PersonalId.toString(),
          gymStudentId: gymStudentId.toString(),
        }),
      });
      return await res.json();
    } catch (err) {
      console.log('deu erro', err);
      return;
    }
  },
  getTrainingStudent: async (id, token) => {
    try {
      let res = await fetch(`${BASE_API}/api/workout/list/${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      });
      return await res.json();
    } catch (err) {
      console.log('deu erro', err);
      return;
    }
  },
};
