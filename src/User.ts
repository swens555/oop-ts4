type UserType={
    id:string
    name:string; 
    age:number; 
    nickName:string;
    password:string;
}
type UserCreationType = Omit<UserType, "id">;
export class User{
    constructor({name,age,nickName,password}:UserCreationType){
    this.name=name; 
    this.age=age; 
    this.nickName=nickName;
    this.password=password;
}
    private id:string=this.generateId()
    private name:string; 
    private age:number; 
    private nickName:string;
    private password:string;

    getName() {
        return this.name;
      }
    
      getAge() {
        return this.age;
      }
    
      getNickName() {
        return this.nickName;
      }
      getPassword(){
        return this.password;
      }
    
      setName(name: UserType["name"]) {
        if (!name) {
          return;
        }
        this.name = name;
      }
    
      setAge(age: UserType["age"]) {
        if (!age) {
          return;
        }
        this.age = age;
      }
    
      private generateId() {
        return Math.random().toString(36).substring(2, 15);
      }
    }
    


