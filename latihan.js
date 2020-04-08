var readline = require('readline-sync')
var a = readline.question('Masukan bilangan bulat ');
var b = readline.question('Masukan Tipe data Riil ')
hasila = typeof(a);
hasilb = typeof(b);
console.log('Tipe data sebelum di konversi');
console.log('Tipe data a : '+hasila);
console.log('Tipe data b : '+hasilb);
console.log('Tipe data setelah di konversi');
hasil1 = parseInt(a);
hasil2 = parseInt(b);
hasila = typeof(hasil1);
hasilb = typeof(hasil2);
console.log('Tipe data setelah di ubah : '+hasila);
console.log('Tipe data setelah di ubah : '+hasilb);