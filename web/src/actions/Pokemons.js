import axios from 'axios'

import { FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE } from './actionTypes'

const API_ROOT = 'http://localhost:3001'

const api = async ({ endpoint, method = 'get', body, query }) => {
  try {
    const payload = {};
    if (body) payload.data = body;
    payload.params = query;
    const response = await axios({ method, baseURL: API_ROOT, url: endpoint, ...payload });
    return { isSuccess: true, response: response.data };
  } catch (error) {
    return { isSuccess: false, error: error.response.data };
  }
};

const requestStart = () => ({ type: FETCH_POKEMON_REQUEST })

const requestSuccess = payload => ({ type: FETCH_POKEMON_SUCCESS, payload })

const requestFailure = payload => ({ type: FETCH_POKEMON_FAILURE, payload })

export const fetchPokemonsAction = () => async dispatch => {
	dispatch(requestStart())
	const { isSuccess, error, response } = await api({ endpoint: '/pokemons', method: 'get' })
	if (isSuccess) {
		dispatch(requestSuccess(response))
	} else {
		dispatch(requestFailure(error))
	}
}