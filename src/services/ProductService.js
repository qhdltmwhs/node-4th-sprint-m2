import instance from "../api/axios.js";

// const BASE_URL = "https://panda-market-api-crud.vercel.app";

// [Get] findAll (https://panda-market-api-crud.vercel.app/products)
export async function getProductList(options = {}) {
    const defaultParams = {
        page: 1,
        pageSize: 10,
        keyword: "NEW",
    };

    const params = { ...defaultParams, ...options };

    try {
        const response = await instance.get(`/products`, { params });
        return response.data;
    } catch (error) {
        console.log(`${error.name} : ${error.message}`);
    }
}

// [Get] findById (https://panda-market-api-crud.vercel.app/products/1)
export async function getProduct(id) {
    try {
        const response = await instance.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.log(`${error.name} : ${error.message}`);
    }
}

// [POST] add (https://panda-market-api-crud.vercel.app/products)
export async function createProduct(product) {
    try {
        const response = await instance.post(`/products`, product);
        return response.data;
    } catch (error) {
        console.log(`${error.name} : ${error.message}`);
    }
}

// [PATCH] updateById (https://panda-market-api-crud.vercel.app/products/1)
export async function patchProduct(id, updateData) {
    try {
        const response = await instance.patch(`/products/${id}`, updateData);
        return response.data;
    } catch (error) {
        console.log(`${error.name} : ${error.message}`);
    }
}

// [DELETE] deleteById (https://panda-market-api-crud.vercel.app/products/1)
export async function deleteProduct(id) {
    try {
        const response = await instance.delete(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.log(`${error.name} : ${error.message}`);
    }
}
