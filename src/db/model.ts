

export type employeeDetailType={
    employeeId:number;
    name:string;
    age:number;
    position:string;
    salary:number;
}
export type employeeUpdateType={
    name?:string;
    age?:number;
    position?:string;
    salary?:number;
}

// interface userDetails{
//     name:string;
//     age:number;
// }

// type orderStatus="pending"| "delivered" |"confirmed"