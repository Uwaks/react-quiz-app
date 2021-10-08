import axios from 'axios'

const baseUrl = 'https://opentdb.com/api.php?amount=10&type=multiple'

export function getQuestions() {
  return axios.get(baseUrl)
}