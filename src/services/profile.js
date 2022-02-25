import { client, parseData } from './client';

export async function getProfile() {
  const request = await client.from('profiles').select().single();
  return parseData(request);
}

export async function updateProfile({ name, email, bio, birthday }) {
  const request = await client.from('profiles').update({ name, bio, birthday }).match({ email });
  return parseData(request);
}

export async function createProfile({ name, email, bio, birthday }) {
  const request = await client.from('profiles').insert({ name, email, bio, birthday });
  return parseData(request);
}

export async function deleteProfileByEmail(email) {
  const request = await client.from('profiles').delete().match({ email });
  return parseData(request);
}

// export async function logInUser(email, password) {
//   const { user, error } = await client.auth.signIn({ email, password });
//   if (error) {
//     throw error;
//   }
//   return user;
// }
