import create from './http-service';

export interface User {
  // dont need to type out all the user properties if we are not going to use them from the response
  id: number;
  name: string;
}

export default create('/users');