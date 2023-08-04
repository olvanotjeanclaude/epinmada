import http from "../Helper/makeRequest";

export class BaseService {
    constructor(endPoint) {
        this.endPoint = endPoint;
    }

    async fetchAll(page = 1, params = {}) {
        return (await http.get(`/${this.endPoint}?page=${page}`, { params })
            .catch(error => this.handleError(error)))
            ?.data
    }

    async store(newData) {
        return (await http.post(`/${this.endPoint}`, newData)
            .catch(error => this.handleError(error)))

    }

    async show(id) {
        return (await http.get(`/${this.endPoint}/${id}`)
            .catch(error => this.handleError(error)))
            ?.data
    }

    async update(data) {
        return (await http.put(`/${this.endPoint}/${data.id}`, data)
            .catch(error => this.handleError(error)))

    }

    async destroy(id) {
        return (await http.delete(`/${this.endPoint}/${id}`)
            .catch(error => this.handleError(error)))
            ?.data

    }

    handleError(error) {
        switch (error.response.status) {
            case 500:
                throw "Erreur du serveur";
            case 404:
                throw "Data introuvalble";
            case 422:
                throw "Mauvaise data";
            case 401:
                throw "Veuillez se reconnecter";
            default:
                throw "Erreur inconnue";
        }
    }
}