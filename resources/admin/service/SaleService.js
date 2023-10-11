import { END_POINTS } from "../api/config";
import { BaseService } from "./BaseService";

class SaleService extends BaseService {
    constructor() {
        super(END_POINTS.sales);
    }
}

const saleService = new SaleService();

export default saleService;