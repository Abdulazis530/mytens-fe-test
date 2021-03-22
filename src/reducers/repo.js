
import {LOAD_PROFILE_SUCCESS,LOAD_REPOS_SUCCESS,SET_LOADING_PROFILE,SET_LOADING_REPOS} from '../constant';
const repos = (state = { repositories: [], isLoadingProfile: true, isLoadingRepo: false, profile: {} }, action) => {
    switch (action.type) {
        case LOAD_PROFILE_SUCCESS :
            return {
                ...state,
                profile: action.profile,
                isLoadingProfile: false
            }
        case LOAD_REPOS_SUCCESS:
            return {
                ...state,
                repositories: [state.repositories, ...action.repositories],
                isLoadingRepo: false
            }
        case SET_LOADING_PROFILE :
            return {
                ...state,
                isLoadingProfile: true
            }
        case SET_LOADING_REPOS:
            return {
                ...state,
                isLoadingRepo: true
            }

        default:
            return state

    }
}
export default repos