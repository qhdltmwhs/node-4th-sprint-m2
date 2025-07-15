import instance from "../api/axios.js";

// [Get] findAll (https://panda-market-api-crud.vercel.app/articles)
export async function getArticleList(options = {}) {
    const defaultParams = {
        page: 1,
        pageSize: 10,
        keyword: "뉴진스",
    };

    const params = { ...defaultParams, ...options };

    try {
        const response = await instance.get(`/articles`, { params });
        return response.data;
    } catch (error) {
        console.log(`${error.name} : ${error.message}`);
    }
}

// [Get] findById (https://panda-market-api-crud.vercel.app/articles/1)
export async function getArticle(id) {
    try {
        const response = await instance.get(`/articles/${id}`);
        return response.data;
    } catch (error) {
        console.log(`${error.name} : ${error.message}`);
    }
}

// [POST] add (https://panda-market-api-crud.vercel.app/articles)
export async function createArticle(article) {
    try {
        const response = await instance.post(`/articles`, article);
        return response.data;
    } catch (error) {
        console.log(`${error.name} : ${error.message}`);
    }
}

// [PATCH] updateById (https://panda-market-api-crud.vercel.app/articles/1)
export async function patchArticle(id, updateData) {
    try {
        const response = await instance.patch(`/articles/${id}`, updateData);
        return response.data;
    } catch (error) {
        console.log(`${error.name} : ${error.message}`);
    }
}

// [DELETE] deleteById (https://panda-market-api-crud.vercel.app/articles/1)
export async function deleteArticle(id) {
    try {
        const response = await instance.delete(`/articles/${id}`);
        return response.data;
    } catch (error) {
        console.log(`${error.name} : ${error.message}`);
    }
}
