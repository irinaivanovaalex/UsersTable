import {AxiosInstance} from 'axios';

import {UserEntity} from './UserEntity';

export class UserService {
  fetchUsers = async (): Promise<UserEntity[]> => {
    //TODO: здесь должна быть валидация
    const users = await this.httpClient.get('api/users/random_user?size=10');
    return users.data;
  };

  constructor(private httpClient: AxiosInstance) {}
}
