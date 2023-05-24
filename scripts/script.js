var display = document.querySelector(".display")
var question_box = document.querySelector(".question_box")
var question_text = document.querySelector(".question_text")
var flexList = document.querySelector("#flexList")


function menu(){
    question_box.innerHTML = ""
    question_text.innerText = "Selecione uma fase:"
    question_box.appendChild(question_text)
    let fase1 = document.createElement("button")
    fase1.innerHTML = "1-1"
    fase1.onclick = function(){
        main("1 - Você têm duas caixas e precisa colocar elas em uma coluna com a sequência 1 -> 2. Selecione a opção correta:",question_box,question_text, "column", "row")
    } 
    question_text.appendChild(fase1)
}
function main(texto, blocoTexto, textoContainer, option, defaultOption){
    textoContainer.innerHTML = ""
    display.style.flexDirection = `${defaultOption}`
    textoContainer.innerText = `${texto}`
    blocoTexto.appendChild(textoContainer)
    blocoTexto.appendChild(flexList)
    flexList.addEventListener("change", function(){
        var selectBox = flexList.options[flexList.selectedIndex]
        if (selectBox.value === `${option}`){
            display.style.flexDirection = `${option}`
        }else{
            textoContainer.innerText = "ERROU!"
            let retry = document.createElement("button")
            retry.innerHTML = "Recomeçar"
            retry.onclick = function (){
                menu();
            }
            textoContainer.appendChild(retry)
        }
    })
    let buttonMenu = document.createElement("button")
    buttonMenu.innerHTML = "Menu"
    textoContainer.appendChild(buttonMenu)
    buttonMenu.onclick = function(){
        menu()
    }
}

menu()

