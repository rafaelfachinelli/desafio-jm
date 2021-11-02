let potatoEffect1Element = document.getElementById("potato-effect-1")
let potatoEffect2Element = document.getElementById("potato-effect-2")
let potatoEffect3Element = document.getElementById("potato-effect-3")

let subscribeDateElement = document.getElementById("subscribe-date")

let giftElement = document.getElementById("gift")
let blockedElement = document.getElementById("blocked")

let helpElement = document.getElementById("help")

let potatoEffectValue = ""
let subscribeDateValue = ""

helpElement.addEventListener("click", function () {
    alert("Ao responder corretamente estas perguntas, você irá desbloquear uma fonte de conhecimento antiga que revela a forma de identificar o verdadeiro amor.")
})

potatoEffect1Element.addEventListener("change", function () {
    if (this.checked) {
        potatoEffectValue = "1"
    }
    validateResponses()
})

potatoEffect2Element.addEventListener("change", function () {
    if (this.checked) {
        potatoEffectValue = "2"
    }
    validateResponses()
})

potatoEffect3Element.addEventListener("change", function () {
    if (this.checked) {
        potatoEffectValue = "3"
    }
    validateResponses()
})

subscribeDateElement.addEventListener("change", function () {
    subscribeDateValue = this.value
    validateResponses()
})

function validateResponses() {
    const isSubscribeDateCorrect = subscribeDateValue === "2021-09-26"
    const isPotatoEffectCorrect = potatoEffectValue === "3"
    const isResponseCorrect = isSubscribeDateCorrect && isPotatoEffectCorrect

    if (isResponseCorrect) {
        setGiftDisponible()
        alert("Parabéns! Você acertou, agora clique no presente para visualizar a sua surpresa!")
    }
}

function setGiftDisponible() {
    blockedElement.classList.add("blocked-removed")
    giftElement.classList.add("gift-disponible")
}

blockedElement.addEventListener("click", function () {
    if (!blockedElement.classList.contains("blocked-removed")) {
        alert("Ops! Você precisa responder as perguntas corretamente para desbloquear o presente!")
    }
})

giftElement.addEventListener("click", function () {
    if (giftElement.classList.contains("gift-disponible")) {
    }
})
