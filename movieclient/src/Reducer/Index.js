import { combineReducers } from 'redux';
import moviesReducer from './Movie.js';
import movieReducer from './Movies.js';
import actorsReducer from './Actors.js';
import actorReducer from './Actor.js';
import scoreReducer from './Score.js';
import playerReducer from './Player.js';
import gameReducer from './Game.js'

const rootReducer = combineReducers({
	movies: moviesReducer,
	movie: movieReducer,
	actors: actorsReducer,
	actor: actorReducer,
	score: scoreReducer, 
	statusPlayer: playerReducer,
	game: gameReducer
});

export default rootReducer;
