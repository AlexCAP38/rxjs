import '../pages/index.css';



const myInt: number = 12
const mayBeUndef: number | undefined = undefined

const summ = myInt + mayBeUndef
// ошибка TS: mayBeUndef может быть undefined,
// мы должны что-то сделать на этот случай, например дать фолбэк

const summ = myInt + (mayBeUndef || 12)
// если в mayBeUndef нет значения, то вторым слагаемым будет 12


const users = [
  {
        name: "Oby",
        age: 12,
    },
  {
        name: "Heera",
        data: {
             avatar: "image"
        }
    },
];

const loggedInUser = users.find((u) => u.name === loggedInUsername);

console.log(loggedInUser.age);
// ошибка TSL: 'loggedInUser' может быть undefined

console.log(loggedInUser.data.avatar);
// oшибка TSL: 'data' может быть undefined