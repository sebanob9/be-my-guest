export class Guest {
    constructor(_id='', friendFrom='', name="", withCompanion=false,
    nameCompanion='', category='', phone=0, allergies='') {
        this._id= _id;
        this.friendFrom = friendFrom;
        this.name = name;
        this.withCompanion = withCompanion;
        this.nameCompanion = nameCompanion;
        this.category = category;
        this.phone = phone;
        this.allergies = allergies;

    }

    _id: string;
    friendFrom: string;
    name: string;
    withCompanion: boolean;
    nameCompanion: string;
    category: string;
    phone: number;
    allergies: string;
}
 