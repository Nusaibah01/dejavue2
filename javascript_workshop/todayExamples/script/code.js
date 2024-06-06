// use var instead  of let
// for (var i = 0; i < 5; i++);
//     console.log(i);

// let info = {
//     display: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// above is an example of a getter/ accessor this.firstName
// let person1 = Object.create(info)
// person1.firstName = 'Nusaibah'
// person1.lastName = 'Charif'
// console.log(person1.display());


/*object has two properties ;
 -accessor = getter 
- modifier = setter
 */


// let personDetail = {
//     firstName: 'Nusaibah',
//     lastName: 'Charif'
// }
// let propertyName = 'firstName'
// if(personDetail.hasOwnProperty(propertyName)) {
// if you want to check if a property exists use object(name).hasOwnProperty
//     console.log(personDetail.firstName);
// }else {
//  console.log(`${propertyName} property was not found`);
// }
// console.log(personDetail)
// console.log(Object.keys(personDetail));
// console.log(Object.values(personDetail));
// console.log(Object.entries(personDetail));


// let students = [
//     {
//         firstName: 'LamlaNkosi',
//         lastName: 'Nomnganga', 
//         gender: 'Male'
//     },
//     {
//         firstName: 'Thutuza',
//         lastName: 'Potswayo', 
//         gender: 'Female'
//     },
//     {
//         firstName: 'Nusaibah',
//         lastName: 'Charif', 
//         gender: 'Female'
//     },
//     {
//         firstName: 'Rahmah',
//         lastName: 'Charif', 
//         gender: 'Female'
//     }
    


// ]
// group by groups data based on a specific property
// Method 1:
// console.log(Object.groupBy(students, (person) => person.gender));

// Method 2:
// console.log(Object.groupBy(students, ({ gender}) => gender));




// let numbers = [9, 5, 3, 5, 9]
// console.log(numbers.length);

// let uniqueNumbers =  Array.from(new Set(numbers))
// console.log(uniqueNumbers)

