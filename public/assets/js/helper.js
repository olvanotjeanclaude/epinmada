import axios from "axios";
import { Cookie } from "../../front/Cookie.js";

export function generateUniqueID() {
    return crypto.randomUUID();
}

export function settingAnonymousID() {
    const uniqueID = generateUniqueID();
    const userID = Cookie.get('anonymousID');

    if (!userID) {
        Cookie.set('anonymousID', uniqueID, 30);
    }
}

export function Axios() {
    const api = axios.create({
        baseURL: "/api",
        headers: {
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "withCredentials": true,
            "Content-Type": "application/json",
        }
    });

    api.interceptors.request.use(config => {
        setLoading(true);
        return config;
    }, error => {
        return Promise.reject(error);
    });

    api.interceptors.response.use(response => {
        setLoading(false);
        return response;
    }, error => {
        setLoading(false);
        return Promise.reject(error);
    });

    return api;
};

export function setLoading(isLoading = true) {
    // if (isLoading) {
    //     console.log("loading");
    // }
    // else {
    //     console.log("done");
    // }
}

export function formatPrice(price) {
    price = parseInt(price);

    if (Number.isNumeric(price)) {
        price = price.toLocaleString('tr-TR');
        return price + " Ariary";
    }

    return "0 Ariary";
}


export function printError(message) {
    return message &&`<small className="p-error">${message}</small>`;
}

export function getBadgeStatus(status) {
    const maps = {
        0: { severity: "danger", value: "Passif" },
        1: { severity: "success", value: "Actif" },
    };

    return maps[status] ?? { severity: "info", value: "Inconnu" };
}