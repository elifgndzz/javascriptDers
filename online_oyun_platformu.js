let secim;
let bakiye=1000;
do{


secim=prompt(`
OYUN MENÜSÜ
=====
1-Para Yatır
2-Para Çek
3-Bakiye Görüntüleme
4-Çıkış
Seçiminiz(1-4):


`);
    switch(secim)
{
       case "1":
           let yatirilan=Number(prompt("Yatırılacak miktar:"));
             if(yatirilan>0)
          {
              bakiye+=yatirilan;
              alert(yatirilan+"Tl Yatırıldı.Yeni Bakiye:"+bakiye+"TL");
          }
               break;
        case"2":
         let cekilen=Number(prompt("Çekilecek Miktar:"));
          if(cekilen>0 && cekilen<=bakiye)
           {
            bakiye=cekilen;
            alert(cekilen+"TLçekildi.Kalan bakiye:"+bakiye+"TL");
           }
        else{
            alert("Geçersiz Miktar");
            }
        break;
            case"3":
             alert("Bakiyeniz:"+bakiye+"TL");
             break;
        case"4":
        alert("ÇIKILIYOR...");
        break;
        default:
            alert("Geçersiz Seçim");
  }
}
while(secim!=="4");