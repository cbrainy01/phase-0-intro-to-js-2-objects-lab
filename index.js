// Write your solution in this file!
const employee = {

    name: "Ted",
    streetAddress: "Outer Dr"
};

// function updateEmployeeWithKeyAndValue(obj, key, value) {

//  return Object.assign({}, obj, {[key]: value});
// }

// const newObject = updateEmployeeWithKeyAndValue(employees, "streetAddress", "Hollywood Blvd");


function updateEmployeeWithKeyAndValue(employee, key, value) {
     
   //return Object.assign({}, employee, {[key]: value});

   const newObject = {...employee};
   newObject[key] = value;
   return newObject;
   
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee[key] = value;
    return employee;

}

function deleteFromEmployeeByKey(employee, key) {

    const newObject = {...employee};
    newObject[key] = undefined;
    //delete newObject.key;
return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];
    return employee;
}