//Veri türünü öğrenme
let adi="İrem";
let soyadi="Deneme";
let sifre=123456;
let durumu=true;
let email="iyasar@ogr.gelisim.edu.tr";
let ekbilgi=null;

document.writeln(
    "<h3><u>Kayıt Bilgisi Öğrenme</u></h3>" + "<br>"+
    "Adı: " + `${adi}` + "-" + typeof(adi) + "<br>" +
    "Soyadı : " + `${soyadi}` + "-" + typeof(soyadi) + "<br>" +
    "Şifre: " + `${sifre}` + "-" + typeof(sifre) + "<br>" +
    "Durumu: " + `${durumu}` + "-" + typeof(durumu) + "<br>" +
    "Email: " + `${email}` + "-" + typeof(email) + "<br>" +
    "Ek Bilgi: " + `${ekbilgi}` + "-" + typeof(ekbilgi) 
);
//2.ÖRNEK
let sayi="15";
console.log(sayi,"değeri: ",typeof(sayi));
let sayi1=parseInt(sayi);
console.log(sayi1,"değeri: ",typeof(sayi1));
let sayi2=11.5;
console.log(sayi2,"değeri: ",typeof(sayi2));
let sayi3=55;
let sayi4=sayi3.toString();
console.log(sayi4,"değeri: ",typeof(sayi4));