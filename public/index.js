console.log('ok');
/*1. Sukurti User klasę;
2. Klasėje turi būt reikšmės: name, age, nickName, password, dateCreated bei id;*/
/*3. name, age, nickName, password turi būt paduodami kuriant naują instance. (per konstruktorių);
4. dataCreated bei id turi būt sugeneruojami automatiškai. (reiks parašyt metodus kurie sugeneruoja reikšmes);
5. name ir age turi turėt getterį bei setterį, nickName tik getterį;
6. Visi kintamieji turi būt private;
7. Visi metodai naudojami tik klasės viduje turi būt private;
8. Sukurti metodą, kuris atvaizduoja userio info išskyrus password;
9. Sukurti UserCreationType bei priskirti konstruktoriui;
10. Sukurti naują user index.ts faile. panaudoti getterius, setterius. Pabandyt displayint userį.*/
import { User } from "./User.js";
const newUser = new User({
    name: "Tomas",
    age: 30,
    nickName: "swens",
    password: "456123"
});
console.log(newUser);
/*const userAge=user1.getAge();
console.log(`age: ${userAge}`);
user1.setAge(30);
const newUserAge=user1.getAge();
console.log(`new age: ${newUserAge}`)
console.log(newUser);*/
const newUser2 = new User({
    name: "Linas",
    age: 25,
    nickName: "linas@gmail.com",
    password: "namas12333333",
});
newUser2.setName("Vytautas");
const userName = newUser2.getName();
const id = newUser2.getName();
console.log(userName);
