

 <!-- 1 What is the difference between var, let, and const?
 Difference between var, let, and const -->

var → function scoped, hoisting হয়, একই scope-এ আবার declare করা যায়, re-assign করা যায়।

let → block scoped, hoisting হয় কিন্তু initialize হয় না, একই scope-এ আবার declare করা যায় না, re-assign করা যায়।

const → block scoped, hoisting হয় কিন্তু initialize হয় না, একই scope-এ আবার declare করা যায় না, re-assign করা যায় না।



#### 2) What is the difference between map(), forEach(), and filter()? 
Difference between map(), forEach(), and filter()

map() → প্রতিটি element কে transform করে নতুন array return করে।

forEach() → প্রতিটি element এর উপর function চালায়, কিন্তু কিছু return করে না (undefined দেয়)।

filter() → শর্ত অনুযায়ী কিছু element রেখে নতুন array return করে।



#### 3) What are arrow functions in ES6?
ছোট এবং ক্লিন কোড লেখা যায়।

নিজের this থাকে না, বাইরের scope-এর this নেয় (lexical this)।

Constructor হিসেবে ব্যবহার করা যায় না।

return statement এক লাইনে লেখা যায়।

#### 4) How does destructuring assignment work in ES6?
Destructuring assignment হলো একটি syntax, যেটা দিয়ে array বা object থেকে value সহজে আলাদা করে variable-এ রাখা যায়।

#### 5) Explain template literals in ES6. How are they different from string concatenation?
Concatenation এ + ব্যবহার করতে হয়, যা কোডকে বড় করে ফেলে।

Template literals এ backtick আর ${ } ব্যবহার করা হয়, যা কোডকে ছোট ও readable করে।

Template literals এ multiline সহজে লেখা যায়, কিন্তু concatenation এ \n লাগাতে হ

