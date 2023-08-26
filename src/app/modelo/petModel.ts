export class petModel {
    id?: number;
    info: string;
    race:string;
    age:number;
    locationId:number;
 

    constructor(info:string, race: string,age:number,locationId:number) {
        this.info=info;
        this.race=race;
        this.age=age;
        this.locationId=locationId;
    }
}