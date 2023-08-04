export const FETCH_SHOPS_DATA = 'FETCH_SHOPS_DATA'; 
export const SAVE_SHOPS_DATA = 'SAVE_SHOPS_DATA'

export const fetchShopsData = () => ({
    type: FETCH_SHOPS_DATA
})

export const saveShopsData = (payload) => ({
    type: SAVE_SHOPS_DATA,
    payload
})