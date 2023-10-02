import { END_POINTS } from "../api/config";
import { BaseService } from "./BaseService";

class ContactService extends BaseService {
    constructor() {
        super(END_POINTS.contacts);
    }
}

const contactService = new ContactService();

export default contactService;