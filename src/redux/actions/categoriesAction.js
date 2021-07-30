import {
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,

    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS
} from "./actionTypes"
import * as Data from '../../helpers/Data';

const fetchCategoriesStart = () => ({
    type: FETCH_CATEGORIES_START
})
const fetchCategoriesSuccess = (data) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    categories: data
})

export const fetchCategories = () => {
    return dispatch => {
        dispatch(fetchCategoriesStart());
        if(Data.data && Data.data.length > 0) {
            let categories = {};
            Data.data.map((item) => {
                categories[item.type] = categories[item.type]? categories[item.type] + 1 : 1
            })
            dispatch(fetchCategoriesSuccess(categories))
        } 
    }
}


const fetchProductsStart = () => ({
    type: FETCH_PRODUCTS_START
})
const fetchProductsSuccess = (data) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    products: data
})

export const fetchProducts = (type = null) => {
    return dispatch => {
        dispatch(fetchProductsStart());
        if(Data.data && Data.data.length > 0) {
            if(type) {
                let filteredData = [];
                filteredData = Data?.data.filter((item) => item.type == type) || [];
                dispatch(fetchProductsSuccess(filteredData))
            } else {
                dispatch(fetchProductsSuccess(Data.data))
            }
            
        } 
    }
}

