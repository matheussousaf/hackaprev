import {User} from './User';

export interface Auth {
  user: User | null;
  login: Function;
  register: Function;
  logout: Function;
}
