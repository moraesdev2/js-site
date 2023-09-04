function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = '2.png'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = '1.png'
    } else {
        // BOA NOITE!
        img.src = '3.png'
    }
}