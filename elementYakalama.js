//ID2si ana başlık olan başlığı yakalayın ve rengini kırmızı yapın.

let baslik=document.getElementById("ana-baslik");
console.log("1. görev:"+baslik+"<br>");
baslik.style.color="red";


//Sınıfı.bilgi olan elementlerden ilkini yakalayıp arka planı sarı yapmma
let ilkParagraf=document.querySelector(".bilgi-metni");
console.log("2.görev:"+ilkParagraf+"<br>");
ilkParagraf.style.backgroundColor="yellow";


//Etiket adı a kullanarak link elementini yakala ve kaydır
let link=document.querySelector("a");
console.log("3.görev:"+link+"<br>");
link.style.paddingLeft="100px";
 

//ELEMENTLERİ YAKALA
let sonucMesaji=document.querySelector("#sonuc");
let baslatButonu=document.querySelector("#baslatButon");


//OLAY DİNLEYİCİSİ EKLE
baslatButonu.addEventListener(`click`,function(){
  //METİN GÜNCELLEME
  sonucMesaji.textContent="İşlem Tamamlandı!";
  //YAZI RENGİ DEĞİŞTİR
  sonucMesaji.style.color="blue";
  //BUTON KAYBETME
  baslatButonu.style.display="none";


})


