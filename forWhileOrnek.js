
    

let dogruSifre="1234";
let girilensifre="";
let denemeSayisi=0;
while(girilensifre!=dogruSifre && denemeSayisi<3)
{
    girilensifre=prompt("Şifrenizi Giriniz");
    denemeSayisi++;
    if(girilensifre!==dogruSifre)
    {
        alert("Hatalı Şifre! Kalan Deneme Hakkı: "+(3-denemeSayisi));
    }
}
if(girilensifre==dogruSifre)
{
    alert("Başarılı Giriş! Hoş Geldiniz.");
}
else
{
    alert("Hesap Bloke Edildi.");
}