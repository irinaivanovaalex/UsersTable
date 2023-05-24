import { makeAutoObservable } from "mobx";
import { RequestStore } from "mobx-request";
import { UserService } from "./UserService";
import { UserEntity } from "./UserEntity";

export class UsersStore {
    usersRequest = new RequestStore(async () => {
        return this.service.fetchUsers()
    })

    get users() {
        return this.usersRequest.value
    }

    selectUser =(user: UserEntity) => {
        this.selectedUser = user
    }
    selectedUser: UserEntity | undefined = undefined

    constructor(
        private service: UserService,
    ) {
        makeAutoObservable(this)
    }
}