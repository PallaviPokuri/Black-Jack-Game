    let cards = []
    let sum = 0
    let blackjack = false
    let isAlive = false
    let message = " "
    let player= {
        name: "Pallavi",
        chips: 150
    }
   

    let messageEl = document.getElementById("message-el")
    let sumEl = document.getElementById("sum-el")
    let cardsEl = document.getElementById("cards-el")
    let playerEl = document.getElementById("player-el")
    playerEl.textContent = player.name + ": $ " + player.chips

//--------getRandomCard function----

        function getRandomCard(){
            //Math floor used to roundup the number
            let randomnumber =  Math.floor( Math.random() * 13 ) //numbers ranges from 1-12
            if(randomnumber > 10 ){
                return 10
            }else if(randomnumber === 1){
                return 11
            }else{
                return randomnumber
            }
        }

//-------startGame function------

        function startGame(){
            isAlive = true
            let firstcard = getRandomCard()               
            let secondcard = getRandomCard() 
            cards = [firstcard,secondcard]
            sum = cards[0] +cards[1]
            renderGame()
        }
 //-------renderGame function-----

        function renderGame(){
            //render out first card and secondcard
            cardsEl.textContent = "Cards: " 
            for(let i=0; i<cards.length; i ++){
                cardsEl.textContent +=cards[i] + " "
            }
            //render out all the cards
            sumEl.textContent = "Sum: " + sum

            // if else condition
            if(sum<=20){
                message ="Would you like to draw a card? "
            }
            else if(sum === 21)
            {
                message = "Blackjack!"
                blackjack = true
            }
            else if(sum>21)
            {
                message = "You're out of game "
                isAlive = false
            }
            messageEl.textContent = message


        }

//-------newcard function-----

    function newCard(){
        
        if(isAlive === true && blackjack === false){
            let card = getRandomCard()
            sum += card
            cards.push(card)
            renderGame()
        }
    }




