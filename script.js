function sim() {
    window.open("https://www.capcut.com/pt-br/template-detail/Gato-dan%C3%A7ante/7310017342241590530", "_blank");
}
    
    function desviar(t) {
        var btn = t;
        btn.style.position = 'absolute';
        btn.style.bottom = randomNumber(10, 90);
        btn.style.left = randomNumber(10, 90);
        console.log("Aí não chefe!!")
    }

    function randomNumber(min, max) {
        return (Math.random() * (max - min) + min) + "%";
}