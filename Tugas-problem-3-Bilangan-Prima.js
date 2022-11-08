/*

input = 7
output= bilangan prima
input = 10
output = bukan bilangan prima


*/

// Menentukan apakah bilangan itu bilangan prima atau bukan
// Bilangan prima yaitu bilangan yang memiliki 2 faktor

function primeNumber(number) {
  let totalFaktor = 0;

  for (let i = 1; i <= number; i++){
    if(number % i == 0) {
      totalFaktor++
    }
  }
  //output
  if (totalFaktor == 2){
    console.log("Bilangan Prima");
  }else{
    console.log("Bukan Bilangan Prima");
  }
}

primeNumber(11);
primeNumber(13);
primeNumber(17);
primeNumber(20);
primeNumber(35);













