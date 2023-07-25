import { END_POINTS } from "../api/config";
import { BaseService } from "./BaseService";

class ProductService extends BaseService {
    constructor() {
        super(END_POINTS.products);
    }
}

export default ProductService;