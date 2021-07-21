import axios from "axios";

const instance = axios.create({
  baseURL: 'https://trello.backend.tests.nekidaem.ru/',
  headers: {
    'Content-type': 'application/json',
  }
})

export default instance