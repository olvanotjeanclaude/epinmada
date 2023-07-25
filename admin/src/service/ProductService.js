import { END_POINTS } from "../api/config";
import { BaseService } from "./BaseService";

class ProductService extends BaseService {
    constructor() {
        super(END_POINTS.products);
        this.name = "products";
    }
}

const productService = new ProductService();

export default productService;