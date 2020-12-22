
import axios from 'axios'
import * as CONSTANTS from '../Api/Const.js'
import {GET_ALL_MOVIES_SUCCEED,GET_ALL_MOVIES_ERROR,GET_ALL_ACTORS_SUCCEED,
        GET_ALL_ACTORS_ERROR,GET_DETAIL_ACTOR_SUCCEED,GET_DETAIL_ACTOR_ERROR,
         GET_MOVIES_ACTOR_SUCCEED,GET_MOVIES_ACTOR_ERROR,GET_IMAGE_ACTOR_SUCCEED
        ,GET_IMAGE_ACTOR_ERROR,GET_DETAIL_MOVIE_SUCCEED,GET_DETAIL_MOVIE_ERROR,
         GET_IMAGE_MOVIE_SUCCEED,GET_IMAGE_MOVIE_ERROR
        } from './Type'
        
const { API_BASE, API_KEY } = CONSTANTS


export const getMovies = (page) => {
    return dispatch => {
        return axios.get(`${API_BASE}/movie/popular?api_key=${API_KEY}&language=en-US${page}`)
        .then(response => response.data)
        .then(movie => dispatch({type: GET_ALL_MOVIES_SUCCEED, payload: [movie]}))
        .catch((err) => dispatch({type: GET_ALL_MOVIES_ERROR,payload:err}))
    }
}

export const getActors = (page) => {
    return dispatch => {
        return axios.get(`${API_BASE}/person/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
        .then(response => response.data)
        .then(actor => dispatch({type: GET_ALL_ACTORS_SUCCEED, payload: [actor]}))
        .catch((err) => dispatch({type: GET_ALL_ACTORS_ERROR,payload:err}))
    }
}

export const getDetailActor = (actor_id) => {
    return dispatch => {
        return axios.get(`${API_BASE}/person/${actor_id}?api_key=${API_KEY}&language=en-US`)
        .then(response => response.data)
        .then(actor => dispatch({type: GET_DETAIL_ACTOR_SUCCEED, payload:[actor]}))
        .catch((err) => dispatch({type: GET_DETAIL_ACTOR_ERROR,payload:err}))
    }
}

export const getMoviesOfActor = (actor_id) => {
    return dispatch => {
        return axios.get(`${API_BASE}/person/${actor_id}/movie_credits?api_key=${API_KEY}&language=en-US`)
        .then(response => response.data)
        .then(actor => dispatch({type: GET_MOVIES_ACTOR_SUCCEED, payload:[actor]}))
        .catch((err) => dispatch({type: GET_MOVIES_ACTOR_ERROR,payload:err}))
    }
}

export const getImagesofActor = (actor_id) => {
    return dispatch => {
        return axios.get(`${API_BASE}/person/${actor_id}/images?api_key=${API_KEY}&language=en-US`)
        .then(response => response.data)
        .then(actor => dispatch({type: GET_IMAGE_ACTOR_SUCCEED, payload:[actor]}))
        .catch((err) => dispatch({type: GET_IMAGE_ACTOR_ERROR,payload:err}))
    }
}

export const getDetailMovie = (movie_id) => {
    return dispatch => {
        return axios.get(`${API_BASE}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
        .then(response =>  response.data)
        .then(movie => dispatch({type: GET_DETAIL_MOVIE_SUCCEED, payload:[movie]}))
        .catch((err) => dispatch({type: GET_DETAIL_MOVIE_ERROR,payload:err}))
    }
}

export const getImagesofMovie = (movie_id) => {
    return dispatch => {
        return axios.get(`${API_BASE}/movie/${movie_id}/images?api_key=${API_KEY}&language=en-US&include_image_language=fr`)
        .then(response =>  response.data)
        .then(movie => dispatch({type: GET_IMAGE_MOVIE_SUCCEED, payload:[movie]}))
        .catch((err) => dispatch({type: GET_IMAGE_MOVIE_ERROR,payload:err}))
    }
}
