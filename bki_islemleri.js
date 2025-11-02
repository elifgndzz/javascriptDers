let kilo = Number(prompt("KİLONUZU GİRİN: "));
let boy = Number(prompt("BOYUNUZU GİRİN: "));
let bki = kilo / (boy * boy);
if (bki < 18.5) 
{
    alert("İDEAL KİLONUN ALTINDASINIZ.");
}
else if (bki>= 18.5 && bki<=24.9) 
{
    alert("İDEAL KİLODASINIZ.");
}
else if (bki>=25 && bki<=29.9) 
{
    alert("İDEAL KİLONUN ÜSTÜNDESİNİZ.");
}
else if (bki>=30 && bki<=39.9) 
{
    alert("OBEZ.");
}
else 
{
    alert("İDEAL KİLONUN ÇOK ÜSTÜNDESİNİZ.");
}
