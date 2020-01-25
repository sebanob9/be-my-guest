export class Gift {
    constructor(_id="", name="", guestName=null, price=null, link="") {
        this._id= _id;
        this.name = name;
        this.guestName =guestName;
        this.price = price;
        this.link = link
    }
    _id: string;
    name: string;
    guestName: string;
    price: number;
    link: string
}
 