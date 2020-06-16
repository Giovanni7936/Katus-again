//Group Members: Shari Dragon, Mellissa Lloyd, Javier Sanchez, and Garrett Cox.
//Giovanni Zaccaro


const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

const mainElement = document.querySelector('body')
const kata1Heading = document.createElement("h2")
kata1Heading.id = "h1"
mainElement.append(kata1Heading)
kata1Heading.append("Kata 01")
const kata1Answer = document.createElement('div')
mainElement.append(kata1Answer)
const limit = 20
for(let counter1 = 1; counter1 <= limit; counter1 +=1 ){
    kata1Answer.append(counter1 + ' ,')

}


const kata2Heading = document.createElement("h2")
kata2Heading.id = "h1"
mainElement.append(kata2Heading)
kata2Heading.append("Kata 02")
const kata2Answer = document.createElement('div')
mainElement.append(kata2Answer)

for(let counter2b = 2; counter2b<= 20; counter2b +=2){
kata2Answer.append(counter2b + ',')


}


const kata3Heading = document.createElement("h2")
kata3Heading.id = "h1"
mainElement.append(kata3Heading)
kata3Heading.append("Kata 03")
const kata3Answer = document.createElement('div')
mainElement.append(kata3Answer)

for(let i = 1; i<=19; i +=2){
kata3Answer.append(i + ',')
}

const kata4Heading = document.createElement("h2")
kata4Heading.id = "h1"
mainElement.append(kata4Heading)
kata4Heading.append("Kata 04")
const kata4Answer = document.createElement('div')
mainElement.append(kata4Answer)

for(let counter4 = 5; counter4 <= 100; counter4 +=5){
kata4Answer.append(counter4 + ',')

}


const kata5Heading = document.createElement("h2")
kata5Heading.id = "h1"
mainElement.append(kata5Heading)
kata5Heading.append("Kata 05")
const kata5Answer = document.createElement('div')
mainElement.append(kata5Answer)
for(let counter5 = 1; counter5 <=100; counter5 +=1){
    const isSquare = Number.isInteger(Math.sqrt(counter5))

    if(isSquare){
        kata5Answer.append(counter5 + ',' )

    }
  

    
}




const kata6Heading = document.createElement("h2")
kata6Heading.id = "h1"
mainElement.append(kata6Heading)
kata6Heading.append("Kata 06")
const kata6Answer = document.createElement('div')
mainElement.append(kata6Answer)
for(let counter6 = 20; counter6 >=1; counter6 -=1){
    kata6Answer.append(counter6 + ',' )
}



const kata7Heading = document.createElement("h2")
kata7Heading.id = "h1"
mainElement.append(kata7Heading)
kata7Heading.append("Kata 07")
const kata7Answer = document.createElement('div')
mainElement.append(kata7Answer)
let counter7 = 20
for(let counter7 = 20; counter7 >=1; counter7 -=2){
kata7Answer.append(counter7 + ',')
  
}


const kata8Heading = document.createElement("h2")
kata8Heading.id = "h1"
mainElement.append(kata8Heading)
kata8Heading.append("Kata 08")
const kata8Answer = document.createElement('div')
mainElement.append(kata8Answer)

for(let counter8 = 19; counter8 >=1; counter8 -=2){
  kata8Answer.append(counter8 + ',')
  
}



const kata9Heading = document.createElement("h2")
kata9Heading.id = "h1"
mainElement.append(kata9Heading)
kata9Heading.append("Kata 09")
const kata9Answer = document.createElement('div')
mainElement.append(kata9Answer)

for( let counter9 = 100; counter9>=1; counter9 -=5){
    kata9Answer.append(counter9 + ',')
  }



const kata10Heading = document.createElement("h2")
kata10Heading.id = "h1"
mainElement.append(kata10Heading)
kata10Heading.append("Kata 10")
const kata10Answer = document.createElement('div')
mainElement.append(kata10Answer)


for( let counter10 = 100 ; counter10 >=1; counter10 -=1){
  
  const isSquare3 = Number.isInteger(Math.sqrt(counter10))
  if(isSquare3){
    kata10Answer.append(counter10 + ',')
  }
  
}

const kata11Heading = document.createElement("h2")
kata11Heading.id = "h1"
mainElement.append(kata11Heading)
kata11Heading.append("Kata 11")
const kata11Answer = document.createElement('div')
mainElement.append(kata11Answer)

for(i = 0; i < sampleArray.length; i +=1){
    kata11Answer.append(sampleArray[i] + ',')
}




const kata12Heading = document.createElement("h2")
kata12Heading.id = "h1"
mainElement.append(kata12Heading)
kata12Heading.append("Kata 12")
const kata12Answer = document.createElement('div')
mainElement.append(kata12Answer)


for(let index = 0; index < sampleArray.length; index ++){
    
    if((sampleArray[index] % 2) != 1) {
        kata12Answer.append(sampleArray[index] + ',')

    }
}


const kata13Heading = document.createElement("h2")
kata13Heading.id = "h1"
mainElement.append(kata13Heading)
kata13Heading.append("Kata 13")
const kata13Answer = document.createElement('div')
mainElement.append(kata13Answer)

for(let index = 0; index < sampleArray.length; index ++){
    
    if((sampleArray[index] % 2) != 0) {
        kata13Answer.append(sampleArray[index] + ',')

    }
}


const kata14Heading = document.createElement("h2")
kata14Heading.id = "h1"
mainElement.append(kata14Heading)
kata14Heading.append("Kata 14")
const kata14Answer = document.createElement('div')
mainElement.append(kata14Answer)

for(let index = 0; index < sampleArray.length; index ++){
        kata14Answer.append(sampleArray[index]* sampleArray[index] + ',')
}


const kata15Heading = document.createElement("h2")
kata15Heading.id = "h1"
mainElement.append(kata15Heading)
kata15Heading.append("Kata 15")
const kata15Answer = document.createElement('div')
mainElement.append(kata15Answer)
let sum = 0
for(let number  = 1; number <= 20; number +=1){
    sum += number
}
kata15Answer.append(sum)

const kata16Heading = document.createElement("h2")
kata16Heading.id = "h1"
mainElement.append(kata16Heading)
kata16Heading.append("Kata 16")
const kata16Answer = document.createElement('div')
mainElement.append(kata16Answer)

let total = 0
for(let index = 0; index < sampleArray.length; index ++){
    total += sampleArray[index]
}
kata16Answer.append(total)

const kata17Heading = document.createElement("h2")
kata17Heading.id = "h1"
mainElement.append(kata17Heading)
kata17Heading.append("Kata 17")
const kata17Answer = document.createElement('div')
mainElement.append(kata17Answer)


kata17Answer.append (Math.min(...sampleArray)) 


const kata18Heading = document.createElement("h2")
kata18Heading.id = "h1"
mainElement.append(kata18Heading)
kata18Heading.append("Kata 18")
const kata18Answer = document.createElement('div')
mainElement.append(kata18Answer)

kata18Answer.append(Math.max(...sampleArray))


