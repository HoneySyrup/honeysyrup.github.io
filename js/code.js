function accionParaCuandoEllaDigaQueSi() {
    alert('aora iia zomoz nobios <3');
}

function mueveElBoton() {
    width = window.innerWidth;
    height = window.innerHeight;

    newWidth = (Math.random() * width - 70);
    newHeight = (Math.random() * height - 70);

    document.getElementById('btnNo').style.position = "absolute";
    document.getElementById('btnNo').style.left = newWidth + "px";
    document.getElementById('btnNo').style.top = newHeight + "px";
}