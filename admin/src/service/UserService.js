import { END_POINTS } from "../api/config";
import { BaseService } from "./BaseService";

class UserService extends BaseService {
    constructor() {
        super(END_POINTS.users);
        this.name = "users"
    }
}

const userService = new UserService();

export default userService;