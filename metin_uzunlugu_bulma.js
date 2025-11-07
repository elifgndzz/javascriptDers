const metinUzunluguBul= metin => metin.length;
let cumle=prompt("Lütfen bir cümle giriniz.");
if(cumle==null || cumle.trim()=="")
{
    document.writeln("Lütfen geçerli bir metin giriniz.");
}
 else{
       let uzunluk=metinUzunluguBul(cumle.trim());
       document.writeln(`Girdiğiniz metin ${uzunluk} karakterden oluşmaktadır`);
     }