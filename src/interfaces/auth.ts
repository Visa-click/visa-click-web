export interface IAuthResponse {
  token: string;
  user: any;
}

export interface IRegisterRequest {
  email: string;
  password: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}
