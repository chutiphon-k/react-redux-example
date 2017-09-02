import {
	INCREMENT
} from '../actions/actionTypes'

const initialState = {
	value: 0
}

export default (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				value: state + 1
			}
		default:
			return state
	}
}