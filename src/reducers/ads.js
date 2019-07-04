import { ADS_FETCHED, AD_CREATED } from '../actions/ads'

export default (state = null, action) => {
    switch (action.type) {
        case ADS_FETCHED:
            return state = action.payload
        case AD_CREATED:
            if (!state) return state
            else return [...state, {...action.payload}]
        default:
            return state
    }
}