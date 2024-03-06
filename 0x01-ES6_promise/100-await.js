import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    return { photo: uploadPhoto(), user: await createUser() };
  } catch (err) {
    return { photo: null, user: null };
  }
}
