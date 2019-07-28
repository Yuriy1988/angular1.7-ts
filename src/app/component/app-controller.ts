class AppController {
  name: string;

  constructor() {
    this.name = 'Solnishko';
  }

  changeName(): void {
    this.name = 'Telenok';
  }
}

export { AppController };
