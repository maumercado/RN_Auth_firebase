import axios from 'axios'

const AUTH_URL = "https://identitytoolkit.googleapis.com/v1/accounts:"
const API_KEY = "AIzaSyAZqDHbtCMea_iWeMEpo6Ws6W0rQU4fej4"

async function authenticateUser (mode, email, password) {
  const url = `${AUTH_URL}${mode}?key=${API_KEY}`

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true
  })

  return response.data
}

export async function createUser (email, password) {
  await authenticateUser('signUp', email, password)
}

export async function login (email, password) {
  await authenticateUser('signInWithPassword', email, password)
}
