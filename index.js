// Code your solutions in this file

// Test 1 passes with and without the following constants

// const arrayOfNames = ['Lisa', 'Kaitlin', 'Jan']
// const eventNames = 'surpe'

function writeCards(arrayOfNames, eventNames) {
    let thankYouCards = []
    for (let i = 0; i < arrayOfNames.length; i++) {
        thankYouCards.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventNames} gift!`)
    }
    return thankYouCards
}

function countDown(start){
    while (start > 0) {
        console.log(start);
        start -= 1;
    }
    console.log(start)
}