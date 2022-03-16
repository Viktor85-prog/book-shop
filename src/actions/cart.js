export const addToCart = (obj) => ({
    type: "ADD_TO_CART",
    payload: obj
})

export const remove = (id) => ({
    type: "REMOVE_FROM_CART",
    payload: id
})
