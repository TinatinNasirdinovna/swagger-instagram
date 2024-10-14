namespace AUTH {
  type GetAuthResponse = IUser;
  type GetAuthRequest = void;

  type SignInAuthResponse = {
    accessToken: string;
    accessTokenExpiration: string;
    refreshToken: string;
  };
  type SignInAuthRequest = {
    email: string;
    password: string;
  };
  type SignUpAuthResponse = {
    message: string
    accessToken: string
    accessTokenExpiration: string
    refreshToken: string
  };
  type SignUpAuthRequest = {
    email: string
    password: string
    username: string
    photo?: string
  };
}
