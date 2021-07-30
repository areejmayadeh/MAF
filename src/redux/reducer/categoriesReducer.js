import { 
    FETCH_CATEGORIES_START, 
    FETCH_CATEGORIES_SUCCESS, 
    FETCH_CATEGORIES_FAIL,
    
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    categories: {},
    categoriesLoading: false,
    products: [],
    productsLoading: false,
}

const updateData = (oldObject = {}, updateData = {}) => {
    return {
        ...oldObject,
        ...updateData
    }
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_START:
            return updateData(state, { categoriesLoading: true })
        case FETCH_CATEGORIES_SUCCESS:
            return updateData(state, { categories: action.categories, categoriesLoading: false })
        case FETCH_CATEGORIES_FAIL:
            return updateData(state, { categoriesLoading: false })

        case FETCH_PRODUCTS_START:
            return updateData(state, { productsLoading: true })
        case FETCH_PRODUCTS_SUCCESS:
            return updateData(state, { products: action.products, productsLoading: false })
        default:
            return state;
    }
}

export default categoriesReducer;