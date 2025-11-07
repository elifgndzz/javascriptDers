let urunFiyati=Number(prompt("Ürün Fiyatını Giriniz."));
const indirimliFiyat=function(orjinalFiyat,indirimYuzdesi)
 {
  const indirimMiktari=orjinalFiyat*(indirimYuzdesi/100);
  const nihaiFiyat=orjinalFiyat-indirimMiktari;
  return nihaiFiyat;
 }
let kazancim=indirimliFiyat(urunFiyati,25);
document.writeln(`Ürünün %25 İndirimle: ${kazancim} TL`); 
