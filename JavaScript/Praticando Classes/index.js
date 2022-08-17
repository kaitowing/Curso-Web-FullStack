class spaceship{
    constructor(name, crewQuant){
        this.name = name
        this.crewQuant = crewQuant
        this.isHitch = false
        this.doorsOpen = false
    }

    hitch(){
        this.isHitch = true
        this.doorsOpen = true
    }
}

let hitchedSpaceships = []
let option
function showMenu(){
   do{
    option = prompt(
        "What would you like to do next?\n" +
        "1- Hitch Spaceship\n" +
        "2- Show Spaceship\n" +
        "3- End Program"
    )

    switch(option){
        case "1":
        let newShip = createSpaceship()
        newShip.hitch()
        hitchedSpaceships.push(newShip)
        break

        case "2":
            showSpaceships()
            break
    }
   }while(option != 3)
}

function showSpaceships(){
    let spaceshipList = "" 
    hitchedSpaceships.forEach((spaceship,index) =>{
        spaceshipList +=  (index + 1) + "-" + spaceship.name +
        "\nTotal Tripulation: " + spaceship.crewQuant + "\n"
    })

    alert(spaceshipList)
}

function createSpaceship(){
    let name = prompt("What is your spaceship name?")
    let people = prompt("How many people are in it?")
    let ship = new spaceship(name,people)
    return ship
}

let menu = showMenu()