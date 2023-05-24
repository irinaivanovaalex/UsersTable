import {makeAutoObservable} from 'mobx';
import {RequestStore} from 'mobx-request';

import {UserEntity} from './UserEntity';
import {UserService} from './UserService';

export class UsersStore {
  usersRequest = new RequestStore(async () => {
    return this.service.fetchUsers();
  });

  get users() {
    return this.usersRequest.value;
  }

  selectUser = (user: UserEntity) => {
    this.selectedUser = user;
  };
  selectedUser: UserEntity | undefined = undefined;

  constructor(private service: UserService) {
    makeAutoObservable(this);
  }
}
