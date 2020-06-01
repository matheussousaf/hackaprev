export interface User {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  totalInvested: number;
  investmentAverage: number;
}

export interface UserRegister extends User {
  password: string;
}
