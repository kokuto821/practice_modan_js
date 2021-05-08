/**
 * const let等の変数宣言
 * */
// var vail = "var変数"
// console.log(vail);

// // var変数は上書き可能
// vail = "var変数を上書き"
// console.log(vail);

// //var変数は再宣言可能
// var vail = "var変数を再宣言"
// console.log(vail);

// const val3 = "const変数";
// console.log(val3);

//const変数は上書き、再宣言不可
//val3 = "const変数を上書き"
//const val3 = "const変数を再宣言"
//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけえ",
//   age: 28,
// };
// val4.name = "jak";
// val4.adress = "Hiroshima";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird"
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけえ";
// const age = "28";
//「私の名前はじゃけえです。年齢は28歳です。」

//従来の方法
// const message1 = "私の名前は"+ name + "です。年齢は" + age + "です。";
// console.log(message1);

//テンプレート文字列を用いた
// const message2 = `私の名前は${name}。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str){
//   return str;
// }
// console.log(("func1です"));
// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1です"));

//アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log("func2です")
//処理が一列の場合returnを書くのを省略出来る
// const func2 = (str) => str
// console.log("func2です")

// const func3 = (num1, num2) => {
//   return num1 + num2
// };
// console.log(func3(10,20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age:28,
// };

// const message = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message);

// const {name,age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["じゃけぇ","28"];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name,age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message4);
