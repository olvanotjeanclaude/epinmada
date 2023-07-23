import { mapFormErrors } from "../Helper/Helper";
import http from "../Helper/makeRequest";

export class Crud {
    constructor(endPoint) {
        this.endPoint = endPoint;
        this.errors = null;
    }

    async get(page = 1, params = {}) {
        return (await http.get(`/${this.endPoint}?page=${page}`, { params })
            .catch(error => this.handleError(error)))
            ?.data
    }

    async add(newData) {
        return (await http.post(`/${this.endPoint}`, newData)
            .catch(error => this.handleError(error)))
            ?.data
    }

    async show(id) {
        return (await http.get(`/${this.endPoint}/${id}`)
            .catch(error => this.handleError(error)))
            ?.data
    }

    async update(data) {
        return (await http.put(`/${this.endPoint}/${data.id}`, data)
            .catch(error => this.handleError(error)))
            ?.data
    }

    async delete(id) {
        return await http.delete(`/${this.endPoint}/${id}`)
            .catch(error => this.handleError(error))
            ?.data;
    }

    async filter(params, page = 1) {
        return (await http.get(`/${this.endPoint}?page=${page}`, {
            params
        })
            .catch(error => this.handleError(error)))
            ?.data
    }

    getErrors() {
        return this.errors;
    }

    handleError(error) {
        this.errors = error.response;

        switch (error.response.status) {
            case 500:
                throw "Erreur du serveur";
                break;
            case 404:
                throw "Data introuvalble";
                break;
            case 422:
                throw "Mauvaise data";
                break;
            default:
                throw "Erreur inconnue";
                break;
        }
    }
}