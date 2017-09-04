import {
	FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE
} from '../actions/actionTypes'

const initialState = {
	data: [],
	isLoading: false,
	error: {}
}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POKEMON_REQUEST:
			return {
				...state,
				isLoading: true
			}
		case FETCH_POKEMON_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.payload,
				error: {}
			}
		case FETCH_POKEMON_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}
		default:
			return state
	}
}