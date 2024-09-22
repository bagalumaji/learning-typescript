//partial types

type User = {
    username: string,
    age: number
};
type userPartialType = Partial<User>;

const User1PartialData: userPartialType = {
    username: 'sayaji',
    age: 14
}

console.log(User1PartialData);

// required type
type UserRequiredType = Required<User>;
const userRequiredData: UserRequiredType = {
    username: 'sharu',
    age: 13
}
console.log(userRequiredData);

//readonly
type UserReadOnlyType = Readonly<User>;

const userReadOnlyData: UserReadOnlyType = {
    username: 'sharu',
    age: 14
}
//userReadOnlyData.username = 'qwet'; not poosible
console.log(userReadOnlyData);

///record type
interface UserInfo{
    email: string
}
type UserNames="sayaji" | "sharu";

type UserRecordType = Record<UserNames, UserInfo>;
const  userRecordTypeData:UserRecordType={
    sayaji:{
        email:"sayaji@gmail.com",
    },
    sharu:{
        email:"sharu@gmail.com",
    }
}
console.log(userRecordTypeData);

//pick
type UserPickType = Pick<User,"username">;
const userPickTypeData:UserPickType={
    username: 'sharu'
}
console.log(userPickTypeData);
//omit
type UserOmitType = Omit<User,"username">;
const userOmitTypeData:UserOmitType= {
    age : 12
}
console.log(userOmitTypeData);
