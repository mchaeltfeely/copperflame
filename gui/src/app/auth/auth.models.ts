export class LoginResponse {
    public token: string;
    public accessToken: string;
    public user: User;
}

export class User {
    public id: string;
    public name: string;
    public email: string;
    public title: string;
    public firstname: string;
    public lastname: string;
    public username: string;
    public telephone: string;
    public departmentName: string;
    public mobile: string;
    public sessionID: string;
    public defaultUrl: string;
}

