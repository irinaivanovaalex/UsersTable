import { makeAutoObservable } from "mobx";
import { RequestStore } from "mobx-request";
import { UserService } from "./UserService";

export class UsersStore {
    usersRequest = new RequestStore(async () => {
        return this.service.fetchUsers()
    })

    get users() {
        return this.usersRequest.value
    }

    constructor(
        private service: UserService,
    ) {
        makeAutoObservable(this)
    }
}