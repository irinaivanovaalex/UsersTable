import {makeAutoObservable} from 'mobx';

import {UserService} from '../user-list/model/UserService';
import {UsersStore} from '../user-list/model/UsersStore';

import {createHttpClient} from './createHttpClient';

export class RootStore {
  get httpClient() {
    return createHttpClient('https://random-data-api.com');
  }

  private usersService = new UserService(this.httpClient);

  usersStore = new UsersStore(this.usersService);

  constructor() {
    makeAutoObservable(this);
  }
}
