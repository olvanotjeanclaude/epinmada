import { mapFormErrors } from "../Helper/Helper";
import http from "../Helper/makeRequest";

export class Crud {
    constructor(endPoint) {
        this.endPoint = endPoint;
        this.errors = null;
    }

    async get(page = 1, params = {}) {
        return (await http.get(`/${this.endPoint}?page=${page}`, {
            params
        })
            .catch(err => { throw err.message }))
            .data
    }

    async add(newData) {
        return (await http.post(`/${this.endPoint}`, newData)
            .catch(error => this.handleError(error)))
            ?.data
    }

    async show(id) {
        return (await http.get(`/${this.endPoint}/${id}`)
            .catch(error => {
                if (error.response?.status == 404) {
                    throw "Utilisateur introuvable";
                }

                throw error.message
            }))
            .data
    }

    async update(data) {
        return (await http.put(`/${this.endPoint}/${data.id}`, data)
            .catch(error => this.handleError(error)))
            .data
    }

    async delete(id) {
        return await http.delete(`/${this.endPoint}/${id}`).catch(err => { throw err.message })
    }

    async filter(params, page = 1) {
        return (await http.get(`/${this.endPoint}?page=${page}`, {
            params
        })
            .catch(err => { throw err.message }))
            .data
    }

    getErrors() {
        return this.errors;
    }

    handleError(error) {
        const status = error.response?.status;

        if (status == 422) {
            this.errors = mapFormErrors(error.response.data.errors);
        }
        else {
            throw error.message;
        }
    }
}