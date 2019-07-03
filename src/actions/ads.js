import request from 'superagent'


const baseUrl = 'http://localhost:4000/advertisements'

export const ADS_FETCHED = 'ADS_FETCHED'

const adsFetched = ads => ({
    type: ADS_FETCHED,
    payload: ads
})

export const loadAds = () => (dispatch) => {
    request(`${baseUrl}`)
        .then(response => {
            dispatch(adsFetched(response.body))
        })
        .catch(console.error)
}

export const AD_FETCHED = 'AD_FETCHED'

const adFecthed = ad => ({
    type: AD_FETCHED,
    payload: ad
})

export const loadAd = (id) => (dispatch) => {
    request(`${baseUrl}/${id}`)
        .then(response => {
            dispatch(adFecthed(response.body))
        })
        .catch(console.error)
}

export const AD_CREATED  = 'AD_CREATED'

const adCreated = ad => ({
    type: AD_CREATED,
    payload: ad
})

export const createAd = (data) => (dispatch) => {
    request
        .post(`${baseUrl}`)
        .send(response => {
            dispatch(adCreated(response.body))
        })
        .catch(console.error)
}