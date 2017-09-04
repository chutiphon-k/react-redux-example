import { combineReducers } from 'redux'

import CounterReducer from './CounterReducer'
import PokemonReducer from './PokemonReducer'

export default combineReducers({
	counters: CounterReducer,
	pokemons: PokemonReducer
})