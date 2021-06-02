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

// const myProfiele = ["増川", 38];
// const [name, age] = myProfiele;

// const message4 = `名前は${name}です、年齢は${age}歳です`;

// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// console.log(sayHello("ますかわ"));

/**
 * スプレッド構文...
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// //sumFunc(arr1[0], arr1[1]);

// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...num3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(num3);

//配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// const arr7 = [...arr4, ...arr5];

// console.log(arr6);
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

// arr6[0] = 100;
// console.log(arr4);
// console.log(arr6);

/**
 * マップ、フィルターを使った配列の処理
 */
const nameArr = ["西村", "森田", "増川"];

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   name = name + "ぽぽ";
//   return name
// });
// console.log(nameArr2);

// nameArr.map((name, i) => console.log(`${i}は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

/**
 * 3項演算子
 */

// ある条件 ? 条件がtrueの時返却 : 条件がfalseの時
//  const val1 = 1 > 0 ? "trueです" : "falseです";
//  console.log(val1);

//  const num = 1290;
//  console.log(num.toLocaleString());

//  const formatedNum = typeof(num) === 'number' ? num.toLocaleString() : "数値を入力してください";
//  console.log(formatedNum);

// const checkSum = (num1, num2) => num1 + num2 > 100 ? "１００を超えています" : "許容範囲内です";
// console.log(checkSum(50, 51))
