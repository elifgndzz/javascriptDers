let suankiSaat=new Date().getHours();
let suankiDakika=new Date().getMinutes();
document.writeln("Saat ve Dakika: "+suankiSaat+" . "+suankiDakika+"<br>");
let sinavSaati=10;
let sinavDakika=15;
if (suankiSaat<sinavSaati)
{
    let kalanSaat=sinavSaati-suankiSaat;
    let kalanDakika=60-suankiDakika;
    document.writeln("Sınava "+kalanSaat+" saat "+kalanDakika+" dakika var!");

}
else if(suankiSaat==sinavSaati && suankiDakika<sinavDakika)
{
    let kalanDakika=sinavDakika-suankiDakika;
    document.writeln("Sınava "+kalanDakika+" dakika var!");
}
else if(suankiSaat==sinavSaati && suankiDakika>=sinavDakika)
{
    document.writeln("Sınav başladı! Hemen giriş yapınız!");
}
else
{
    document.writeln("Sınav süresi doldu.");
}