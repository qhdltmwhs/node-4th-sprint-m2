import instance from "../api/axios.js";

// [Get] findAll (https://panda-market-api-crud.vercel.app/articles)
export function getArticleList(options = {}) {
    const defaultParams = {
        page: 1,
        pageSize: 10,
        keyword: "뉴진스",
    };

    const params = { ...defaultParams, ...options };

    // Promise를 직접 반환하고, .then/.catch에서 처리
    return instance.get(`/articles`, { params })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(`${error.name} : ${error.message}`);
        });
}

// [Get] findById (https://panda-market-api-crud.vercel.app/articles/1)
export function getArticle(id) {
    return instance.get(`/articles/${id}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(`${error.name} : ${error.message}`);
        });
}

// [POST] add (https://panda-market-api-crud.vercel.app/articles)
export function createArticle(article) {
    return instance.post(`/articles`, article)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(`${error.name} : ${error.message}`);
        });
}

// [PATCH] updateById (https://panda-market-api-crud.vercel.app/articles/1)
export function patchArticle(id, updateData) {
    return instance.patch(`/articles/${id}`, updateData)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(`${error.name} : ${error.message}`);
        });
}

// [DELETE] deleteById (https://panda-market-api-crud.vercel.app/articles/1)
export function deleteArticle(id) {
    return instance.delete(`/articles/${id}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(`${error.name} : ${error.message}`);
        });
}
