import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto()
    .then((data1) => {
      createUser()
        .then((data2) => {
          console.log(`${data1.body} ${data2.firstName} ${data2.lastName}`);
        })
        .catch(() => console.log('Signup system offline'));
    })
    .catch(() => console.log('Signup system offline'));
}
