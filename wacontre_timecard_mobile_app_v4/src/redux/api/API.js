// const getAPI = async (url) => {
//     return await fetch(url,
//         {
//             method: 'GET'
//         });
// }
const urlServe = 'http://45.119.213.225/timecard/';
const postAPI = async url => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(rs => resolve(rs.json()))
      .catch(err => reject(err));
  });
};
export const LoginAPI = async input => {
  console.log('LoginAPI=====', input);
  // const user = 'fermatandrew@gmail.com';
  // const password = '123456';

  let url = `${urlServe}api/login?email=${input.email}&password=${input.password}`;
  // console.log("edit user", url);
  return await postAPI(url);
};
