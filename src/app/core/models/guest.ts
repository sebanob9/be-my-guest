export class Guest {
    constructor(_id='', friendFrom='', name="", withCompanion=false,
    nameCompanion='', category='', phone=0, allergies='', noAllergies=false) {
        this._id= _id;
        this.friendFrom = friendFrom;
        this.name = name;
        this.withCompanion = withCompanion;
        this.nameCompanion = nameCompanion;
        this.category = category;
        this.phone = phone;
        this.allergies = allergies;
        this.noAllergies = noAllergies;
        

    }

    _id: string;
    friendFrom: string;
    name: string;
    withCompanion: boolean;
    nameCompanion: string;
    category: string;
    phone: number;
    allergies: string;
    noAllergies: boolean;
    queso: string;
    pescado: string;
    marisco: string;
    gluten: string;
}
 