import axios from 'axios'

const dontKnow = '¯\\_(ツ)_/¯'
const searchTypes = ['trivia', 'year', 'math']

const getFromStub = async (number, searchType) => {
  const data = {
    0: 'The year 0 does not exist.',
    1: '1 is the loneliest number.',
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const text = data[number] ?? dontKnow
      resolve({ data: { text } })
    }, 400)
  })
}

const getFromApi = async (number, searchType) => {
  const url = getUrl(number, searchType)
  return await axios.get(url)
}

const getUrl = (number, searchType) => {
  const baseUrl = `https://cors-everywhere.herokuapp.com/http://numbersapi.com`
  const searchArgument = searchType ? `${number}/${searchType}` : `${number}`

  return `${baseUrl}/${searchArgument}/?json&default=${dontKnow}`
}

const getFromNumberApi = async (number, searchType = 'math') => {
  // Do not query the API if it is not a number.
  if (isNaN(number)) return dontKnow

  // Pick a random search type when not specified.
  if (!searchType) searchType = searchTypes[Math.floor(Math.random() * searchTypes.length)]

  try {
    // const response = await getFromApi(number, searchType)
    const response = await getFromStub(number, searchType)
    return response.data.text
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default getFromNumberApi
