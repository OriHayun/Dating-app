import { User } from "./user";

export class PremiumUser extends User{
    constructor(id,name,gender,age,height,city,image,premium,hoobies)
    {
        super(id,name,gender,age,height,city,image,premium);
        this.hoobies=hoobies;
    }

    show(){
        let premiumUser= super.show();
        premiumUser+=`Hobbies: ${this.hoobies}`;
        return premiumUser;
    }
}