/**
 * Const Let
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //val1を再宣言
// var val1 = "再宣言";

// //const let 基本はconstを使う、letは可変の場合のみ
// //オブジェクトはconstで作成しても要素変更可能

// const obj1 = {
//   name:"増川",
//   age:"39"
// }
// obj1.occupation = "adobe employee";
// obj1.name = "Mastin";
// console.log(obj1);

// const ar1 = ["mastin0413", "38"];
// console.log(ar1);
// ar1[0] = "hogehoge";

//テンプレート文字列
// const name = "mas";
// const age = "38";
// const message = `私の名前は${name}です、${age}歳です`;
// console.log(message);

/*
アロー関数
*/
//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// // const func2 = (str) => {
// //   return str;
// // };
// const func2 = (str) => str;
// //{}で囲わない場合はreturn省略可能
// console.log(func2("ますちん"));

// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // };
// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(230, 20));

/**
 * 分割代入
 */
// const myProfiele = {
//   name: "ますかわ",
//   age: "38"
// };
// const message1 = `名前は${myProfiele.name}です,年齢は${myProfiele.age}歳です`;

// console.log(message1);

// const { name, age } = myProfiele;
// const message2 = `名前は${name}です,年齢は${age}歳です`;

// console.log(message2);

const myProfiele = ["増川", 38];
const [name, age] = myProfiele;

const message4 = `名前は${name}です、年齢は${age}歳です`;

console.log(message4);
