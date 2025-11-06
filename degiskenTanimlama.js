//var ile değişken tanımlamak (Eski Yöntem)
var ad="Çisem";
console.log(ad);


//let ile değişkeni boş tanımlamak (undefined)
let okul;
console.log(okul);

//let ile değişkene bilgi atamak
okul="Gelişim Üniversitesi";  
console.log(okul);

//let ile değişkene bilgi atayarak tanımlamak
let program="Ön-Yüz Yazılım Gelişitirme";
console.log(program);

//let ile tanımlanan değişken içindeki bilgiyi değiştirme
program="Javascript Uygulamaları";
console.log(program);

//birleştirme ve ekleme işlemi

program= "Ders Bilgisi "+ program;
console.log(program);


//değişken ataması yapılmadan önce kullanmak
//HATALI KULLANIM
/*console.log(sifre);
let sifre=1234;*/

//DOĞRU KULLANIM
let sifre=1234;
console.log(sifre);

//const ile değişken tanımlamak
const PI=3.14;
console.log(PI);