import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return createUser()
    .then((data1) => {
      uploadPhoto()
        .then((data2) => {
          console.log(data2.body, data1.firstName, data1.lastName);
        })
        .catch(() => console.log('Signup system offline'));
    })
    .catch(() => console.log('Signup system offline'));
}
