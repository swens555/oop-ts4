export class User {
    constructor({ name, age, nickName, password }) {
        this.id = this.generateId();
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.password = password;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getNickName() {
        return this.nickName;
    }
    getPassword() {
        return this.password;
    }
    setName(name) {
        if (!name) {
            return;
        }
        this.name = name;
    }
    setAge(age) {
        if (!age) {
            return;
        }
        this.age = age;
    }
    generateId() {
        return Math.random().toString(36).substring(2, 15);
    }
}
