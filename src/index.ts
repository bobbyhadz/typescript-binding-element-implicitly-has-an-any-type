export {};

// Binding element 'X' implicitly has an 'any' type in TypeScript

// EXAMPLE 1 - Type the object parameter correctly

// 👇️ With Functions 👇️
function getEmployee({ id, name }: { id: number; name: string }) {
  return { id, name };
}

// 👇️ With class methods 👇️
class Employee {
  id: number;
  name: string;

  constructor({ id, name }: { id: number; name: string }) {
    this.id = id;
    this.name = name;
  }
}

// ---------------------------------------------------

// // EXAMPLE 2 - Using the any type

// function getEmployee({ id, name }: any) {
//   return { id, name };
// }

// class Employee {
//   id: number;
//   name: string;

//   constructor({ id, name }: any) {
//     this.id = id;
//     this.name = name;
//   }
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Extractinbg the object type into a type alias

// type Employee = {
//   id: number;
//   name: string;
//   tasks: string[];
// };

// function getEmployee({ id, name, tasks }: Employee) {
//   return { id, name, tasks };
// }
