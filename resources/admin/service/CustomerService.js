import http from "../Helper/makeRequest";
import { END_POINTS } from "../api/config";
import { BaseService } from "./BaseService";

class CustomerService extends BaseService {
    constructor() {
        super(END_POINTS.customers);
        this.name = "customers";
    }
}

const customerService = new CustomerService();

export default customerService;