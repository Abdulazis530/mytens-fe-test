import axios from 'axios';
import Swal from 'sweetalert2'
import { SET_LOADING_PROFILE, LOAD_PROFILE_SUCCESS, LOAD_REPOS_SUCCESS, SET_LOADING_REPOS } from '../constant';


/* you can try in mobile by changing base url with your local ip address*/
const request = axios.create({
    baseURL: 'https://api.github.com/users/',
    timeout: 1000,
});

export const loadRepo = (inputValue) => {
    return async dispatch => {
        try {
            dispatch({ type: SET_LOADING_PROFILE })
            dispatch({ type: SET_LOADING_REPOS })
            const profile = await request.get(`${inputValue}`)
            dispatch({ type: LOAD_PROFILE_SUCCESS, profile: profile.data })
            const repositories = await request.get(`${inputValue}/repos`)
            dispatch({ type: LOAD_REPOS_SUCCESS, repositories: repositories.data })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong try again latter!',
            })
        }

    }
}
