import axios from 'axios';

export default class BaseService {
  constructor(private baseUrl: string, private headers?: string) {}

  public async get(endpoint: string) {
    return await axios
      .get(this.baseUrl + endpoint ?? '', {headers: this.headers})
      .then((response: any) => {
        return {...response.data};
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  public async post(endpoint: string, body: any) {
    console.log(this.baseUrl);
    return await axios
      .post(this.baseUrl + endpoint ?? '', body, {headers: this.headers})
      .then((response: any) => {
        console.log(response.data);
        return {...response.data};
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  public async put(endpoint: string, body: any) {
    return await axios
      .put(this.baseUrl + endpoint ?? '', body, {headers: this.headers})
      .then((response: any) => {
        return {...response.data};
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  public async patch() {
    //TODO: Implementar patch
  }

  public async delete(endpoint: string) {
    return await axios
      .delete(this.baseUrl + endpoint ?? '', {headers: this.headers})
      .then((response: any) => {
        return {...response.data};
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}
