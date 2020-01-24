export class Gift {
    constructor(_id="", name="", guestName=null, price=0) {
        this._id= _id;
        this.name = name;
        this.guestName =guestName;
        this.price = price;
    }
    _id: string;
    name: string;
    guestName: string;
    price: number;
}
 