import axios from 'axios';

const GOOGLE_CLIENT_ID =
  '531319829318-nm45a7bd9jvq8sonm6lsmfvhqalhe1op.apps.googleusercontent.com';

const LogInWithGoogle = {
  async login() {
    const response = await axios.post(
      'https://accounts.google.com/o/oauth2/v2/auth',
      {
        client_id: GOOGLE_CLIENT_ID,
        scope: 'profile email',
        response_type: 'code',
        redirect_uri: 'http://localhost:3000/dashboard/oauth/callback&',
      },
      {
        headers: {
          'Access-Control-Allow-Origin': 'http://127.0.0.1:3000', // Replace with the actual domain you want to allow
          'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
          'Access-Control-Allow-Headers':
            'Content-Type, Access-Control-Allow-Headers',
          'Content-Type': 'application/json',
        },
      },
    );

    const code = response.data.code;
    console.log(
      'response',
      response,
      'response.data.code==>',
      response.data.code,
    );

    const tokenResponse = await axios.post(
      'https://accounts.google.com/o/oauth2/v4/token',
      {
        client_id: GOOGLE_CLIENT_ID,
        client_secret: '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',
        code,
        redirect_uri: 'http://localhost:3000/dashboard/oauth/callback&',
        grant_type: 'authorization_code',
      },
    );

    const accessToken = tokenResponse.data.access_token;

    console.log('accessToken', accessToken);

    // Store the access token in your ReactJS application state.

    return accessToken;
  },

  async getUserProfile(accessToken: any) {
    const token = accessToken; // Get the access token from your ReactJS application state.

    const response = await axios.get(
      'https://www.googleapis.com/userinfo/v2/me',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const userProfile = response.data;

    return userProfile;
  },
};

export default LogInWithGoogle;
