let ekran=document.querySelector("#yazi");
let buton=document.querySelector("#buton");

//olay dinleyicisi ekle
buton.addEventListener(`click`,function()
    {
        ekran.textContent="İşlem Tamamlandı!";
        ekran.style.color="blue";
        buton.style.display="none";
    }
)