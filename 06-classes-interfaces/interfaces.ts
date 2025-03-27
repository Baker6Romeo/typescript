interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

// Interfaces are very similar to Types, but interfaces can be added to which is helpful if you want to extend an external librarie's interface. You just define it again.
interface Authenticatable {
  role: string;
}

interface AuthenticatableAdmin extends Authenticatable {
  role: 'Admin' | 'SuperAdmin'
}

let user: Authenticatable; // Using it as a type

user = {
  email: 'test@typescript.com',
  password: 'ArdvArk',
  role: 'Admin',
  login() {
    // Login
  },
  logout() {
    // Logout
  }
}

// Implementing interfaces with classes
class AuthenticatableUser implements Authenticatable{
  constructor(public email: string, public password: string, public role: string){}

  login(){}
  logout(){}

}