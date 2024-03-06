import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then(([user, photo]) => {
      console.log(`${photo.body} ${user.firstname} ${user.lastname}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
