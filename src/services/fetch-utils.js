import { client, checkError } from './client.js';

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return (window.location.href = '../');
}

export function getUser() {
  return client.auth.session();
}

export async function getAllScores() {
  const response = await client.from('scores').select('*').order('date', { ascending: false });

  return checkError(response);
}

export async function getScoreById(id) {
  const response = await client.from('scores').select('*').match({ id });

  return checkError(response);
}

export async function updateScore(game) {
  const response = await client.from('scores').update([game]).match({ id: game.id });

  return checkError(response);
}

export async function createScore(game) {
  const response = await client.from('scores').insert([game]);

  return checkError(response);
}

export async function deleteScore(id) {
  const response = await client.from('scores').delete().match({ id });

  return checkError(response);
}
