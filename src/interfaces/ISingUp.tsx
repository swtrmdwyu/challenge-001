import ILogin from "./ILogin";

export default interface ISingUp extends ILogin {
    firstName: string,
    lastName: string,
    birthDate: string,
    street: string,
    neighborhood: string,
    number: string,
    email: string,
    password: string
}