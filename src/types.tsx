export interface IState {
  isLoading: boolean;
  mainString: string[];
  userData: IUserData;
}

export interface IUserData {
  name: string;
  birth: string;
}
