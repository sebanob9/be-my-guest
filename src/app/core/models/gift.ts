export class Gift {
    constructor(_id="", name="", userName="", price=0) {
        this._id= _id;
        this.name = name;
        this.userName = userName;
        this.price = price;
    }
    _id: string;
    name: string;
    userName: string;
    price: number;
}
 