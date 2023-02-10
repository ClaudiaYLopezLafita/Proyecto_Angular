/**
 * @class Person
 * contiene los datos del formulario para registrar una persona
 */
export class Person {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public size: string,
        public runningClub?:string,
    ){}
}