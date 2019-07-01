// 1
console.log('Hola Consola!');

// 2
let a = 5;
let b = 3;
let c = a + b;
console.log(c);

// 3
function add(a, b) {
  return a + b;
}
add(5, 6);

// 4
function add(a, b) {
  return a + b;
}

if (add(5, 6) == 11) {
  console.log('Test OK');
  console.log('hola');
} else {

}
  console.log('Test Failed');
if (add(1, 6) == 7)
  console.log('Test OK');
else
  console.log('Test Failed');
if (add(7, 3) == 10)
  console.log('Test OK');
else
  console.log('Test Failed');
if (add(6, 1) == 7)
  console.log('Test OK');
else
  console.log('Test Failed');
if (add(1, 3) == 4)
  console.log('Test OK');
else
  console.log('Test Failed');

// 5
let i = -50;
while (i <= 50) {
  console.log(i);
  i++;   // es lo mismo que i = i + 1;

}

// 6 este programa lo resolvio a los 12 años Gauss
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i; // sum = sum + i;
}
console.log(sum);

// en C

int sum = 0;
for (int i = 1; i <= 100; i++) {
  sum += i;   // es lo mismo que sum = sum + i;
}
printf("La suma es %d", sum);



// 7
function fact(n) {
  let result = 1;
  for (let i = n; i > 1; i--)
    result *= i;  // es lo mismo que result = result * i;
  return result;
}
fact(4);


// un array
let a = [1, 2, 3, 4, 89, 17, 1, 4];
let b = ['cosas', 2, 'elefante-1', true, 98392.75673];
let c = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

console.log(a[4]);
console.log(c[2][2]);  // 9




















// 8
let list = [];
for (let i = 0; i < 30; i++)
  list[i] = i;
console.log(list);

// estos metodos (funciones) laburan con arrays como si fueran una PILA (stack)
list.push(algo);
list.pop();



// 9
let grades = [2, 4, 6, 6, 6];

let sum = 0;
for (let i = 0; i < grades.length; i++)
  sum += grades[i];
let avg = sum / grades.length;
console.log(avg);

// 10 con objetos
let contactList = [];
let pedro = {
  name: "Pedro",
  phone: "4567 1233",
  mail: "pedro@mail.com",
  saludar: function() {
    return 'Hola ' + this.name;
  }
};
let juan = {
  name: "Juan",
  phone: "4567 7711",
  mail: "juan@mail.com"
};
contactList.push(juan);
contactList.push(pedro);
console.log(contactList);

// 11
// let contactList = [];
let maria = {
  name: "Maria",
  phone: "4566 1211",
  mail: "maria@mail.com",
  pets: [
    {
      name: 'perro',
      raza: 'pastor aleman',
    },
    {
      name: 'gato',
      raza: 'siames',
    },
  ],

};

function addContact(list, contact) {
  list.push(contact);
  return list;
}

addContact(contactList, maria);

// 12
function findPhone(list, name) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name == name)
      return list[i].phone;
  }
  return 'No encontrado';
}

findPhone(contactList, 'Maria');
findPhone(contactList, 'Pedro');
findPhone(contactList, 'Jorge');
