let spaceship = {
    velocity: 0,
    speedUp: function(acelleration){
        this.velocity =+ acelleration
    }
}

function resgisterSpaceship() {
    spaceship.name = (prompt("Qual o nome da nave?"))
    spaceship.type = (prompt("Qual o tipo da nave?"))
    spaceship.maxVelocity = (prompt("Informe a velocidade máxima da nave."))
}

function stop(){
    alert("Nave: " + spaceship.name + " Tipo: " + spaceship.type + " Está prestes à parar de uma velocidade de: " + spaceship.velocity + "Km/s")
    alert(spaceship.maxVelocity)
    spaceship["velocity"] = 0

}

function acelerate(){
    let acelleration = prompt("Quanto você gostaria de acelera?")
    if(spaceship.maxVelocity > acelleration + spaceship.velocity){
        spaceship.speedUp(acelleration)
    }
}

function showMenu(){
    let option
    do{
       option = prompt("O que voce gostaria de fazer?\n1- Acelerar a nave\n2- Parar a nave")

       switch(option){
        case "1": 
            acelerate()
            break
        
        case "2":
            stop()
            break
        
        default:
            alert("Opção inválida")
       }
    }while(option!=2)
}

resgisterSpaceship()
showMenu()