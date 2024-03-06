import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return promises.map((result) => {
    const value = (result.status === 'fulfilled') ? result.value : result.reason;
    return { status: result.status, value };
  });
}
