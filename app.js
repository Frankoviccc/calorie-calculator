const rekenBtn = document.getElementById('rekenBtn')
const deleteBtn = document.getElementById('deleteBtn')
const h2 = document.getElementById('h2')
const resultContainer = document.getElementById('result-container')
const resultText = document.getElementById('result-text')
let lengte
let gewicht
let leeftijd

// Maak container leeg op moment van klikken rekenBtn

function clearContainer() {
    document.getElementById('container').removeChild(document.getElementById('myForm'))
    document.getElementById('container').removeChild(document.getElementById('drop-fields'))
    document.getElementById('container').removeChild(document.getElementById('btns'))
}

// Reset input velden op moment van klikken wisBtn

function clearInput() {
    document.getElementById('myForm').reset()
}

deleteBtn.addEventListener('click', clearInput)
rekenBtn.addEventListener('click', getValues)

// Sla input van gebruiker op in variables, leeg container en maak resultaat div zichtbaar

function getValues() {
    lengte = document.getElementById('lengte').value
    gewicht = document.getElementById('gewicht').value
    leeftijd = document.getElementById('leeftijd').value
    resultContainer.style.display = 'block'
    rekenmachine()
    clearContainer()
}

// Bereken aan de hand van input gebruiker volgens Benedict formule kcal behoefte

function rekenmachine() {
    let bewegingsNiveau
    let resultKcal
    let geslacht = document.getElementById('geslacht')
    let valueGeslacht = geslacht.options[geslacht.selectedIndex].value
    let beweging = document.getElementById('beweging')
    let valueBeweging = beweging.options[beweging.selectedIndex].value
    
    if(valueBeweging === 'weinig'){
        bewegingsNiveau = 1.2
    } else if(valueBeweging === 'soms'){
        bewegingsNiveau = 1.375
    } else if(valueBeweging === 'vaak'){
        bewegingsNiveau = 1.55
    } else if(valueBeweging === 'sportief'){
        bewegingsNiveau = 1.725
    } else if(valueBeweging === 'intensief'){
        bewegingsNiveau = 1.9
    }
    if(valueGeslacht === 'man'){
        resultKcal = Math.floor((88.362 + (13.397 * gewicht) + (4.799 * lengte) - (5.677 * leeftijd)) * bewegingsNiveau)
    } else if(valueGeslacht === 'vrouw'){
        resultKcal = Math.floor((447.593 + (9.247 * gewicht) + (3.098 * lengte) - (4.330 * leeftijd)) * bewegingsNiveau)
    }
    h2.textContent = `Jouw dagelijkse caloriebehoefte: ${resultKcal}`
} 


