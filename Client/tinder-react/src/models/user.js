export class User {
    runningNumber =0;
    constructor(id,name,gender,age,height,city,image,premium)
    {
        userNum=this.runningNumber++;
        this.id=id;
        this.name=name;
        this.gender=gender;
        this.age=age,
        this.height=height;
        this.city=city;
        this.image=image;
        this.premium=premium;
    }

    show(){
        let user="";
        user+=`<p>ID: ${this.id}</p><p>Name: ${this.name}</p><p>Gender: ${this.gender}</p>
        <p>Age: ${this.age}</p><p>Height: ${this.height}</p><p>City: ${this.City}</p>
        <img src="${this.image}/>"<p>Premium: ${this.premium}</p>`
        return user;
    }
}