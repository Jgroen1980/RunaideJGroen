import http from '../http-common';

    const getAll = () => {
        return http.get('/run');
    }

    const get = id => {
        return http.get(`/run/${id}`);
    }

    const create = data => {
        return http.post('/run', data);
    }

    const update = (id, data) => {
        return http.put(`/run/${id}`, data);
    }

    const remove = id => {
        return http.delete(`/run/${id}`);
    }

    const findByName = name => {
        return http.get(`/run?name=${name}`);
    }

    export default {
        getAll,
        get,
        create,
        update,
        remove,
        findByName
    };