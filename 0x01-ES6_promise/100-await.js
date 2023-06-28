import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const resUPhoto = await uploadPhoto();
  const resCUser = await createUser();

  return {
    photo: resUPhoto,
    user: resCUser,
  };
}
