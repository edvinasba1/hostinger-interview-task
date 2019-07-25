import ApiService from './base/api';

class UserService extends ApiService {
    async post() {
        throw new Error("Not implemented.");
    }

    async patch() {
        throw new Error("Not implemented.");
    }

    async delete() {
        throw new Error("Not implemented.");
    }
}

export default new UserService();