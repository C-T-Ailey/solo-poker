import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import gambler from './assets/8bitgambler.mp3'
import helpChip from './assets/help_chip.png'
import './App.css'
import Help from './components/Help'

function App() {
  
  // state managing the help modal view
  const [showHelp, setShowHelp] = useState(false)

  // state managing whether jokers have been unlocked for inclusion in deck generation
  const [jokersUnlocked, setJokersUnlocked] = useState(false)

  // state managing the contents of the deck
  const [deck, setDeck] = useState([])

  // useeffect hook for debugging the deck state
  useEffect(()=>{
    console.log(deck)
  },[deck])

  // function for generating random integers
  const randInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // arrays containing the items for constructing cards
  const suitsArray = ["Clubs","Diamonds","Hearts","Spades"];

  const ranksArray = ["Joker","Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"]

  // class defining an instance of a card
  class Card {
    constructor(suit, rank, value) {
      this.suit = suit;
      this.rank = rank;
      this.value = value;
    };
    name() {
      return `${this.rank} of ${this.suit}`
    }
  }

  // unused test card
  const spadesAce = new Card("Spades", "Ace", 1)

  // unused class defining an instance of the deck
  class Deck {
    constructor(cards) {
      this.cards = cards;
    };
    
    draw() {
      console.log(this.cards.pop())
    }
  }

  // function for generating a card to include in the deck
  const generateCard = () => {
    let value = 0;
    
    const selectSuit = () => {
      return suitsArray[randInt(0,3)];
    }
    
    const selectRank = () => {
      // if (!!jokersUnlocked) {
      //   var selectedRank = randInt(0,13);
      // } else {
        var selectedRank = randInt(1,13);
      // }

        value = selectedRank;
          
        return ranksArray[selectedRank];
    }
        
    const card = new Card(selectSuit(), selectRank(), value)
        
    return card
  }
      
  // function for generating the deck
  const generateDeck = () => {
    let cards = []
    let cardNames = []
    
    while (cards.length < 52) {
      const newCard = generateCard();
      
      if (!cardNames.includes(newCard.name())){
        cards.push(newCard);
        cardNames.push(newCard.name());
      }
    }
    
    setDeck(cards);
  }

  // function for drawing a card from the deck
  const drawCard = () => {
    let deckCopy = Array.from(deck);

    const drawnCard = deckCopy.pop();

    setDeck(deckCopy);

    console.log(drawnCard);

    return drawnCard;
  }

  return (
    <div id='app-window' className='w-screen h-screen bg-green-500 flex justify-center items-center'>
      <div className='text-black text-xl absolute top-8'>
        well la-di-da mr high resolution monitor
        <audio src={gambler} controls/>
      </div>
      <div id='game-window' className='flex absolute max-w-[1920px] max-h-[1080px] w-full h-full bg-green-700 overflow-hidden'>
        {/* <div id='game-area' className='flex w-full h-full'> */}

          <div id='deck' className='absolute w-52 h-52 bg-white'>
            Deck
          </div>

          <div id='help' className='absolute right-0 w-fit h-fit m-4'>
            <img id="help-chip" alt='help button' src={helpChip} className='w-48 h-48' onClick={() => {setShowHelp(!showHelp)}}/>
          </div>
          
          <div id='community' className='m-auto h-fit w-fit flex flex-row'>
            {[1,2,3,4,5].map((number, index) => (
              <div key={index} className='w-28 h-40 rounded-lg border-white border-dashed border-4 opacity-75 mx-4 flex items-center justify-center text-white'>
                {number}
              </div>
            ))}
          </div>

          <div id='hole' className='absolute bottom-0 w-52 h-52 right-0 bg-white'>
            Hole cards
          </div>

          <div id='chips' className='absolute flex bottom-0 h-52 w-52 bg-white'>
            Chips and betting
          </div>

        {/* </div> */}

          <div id="testbuttons" className='absolute bottom-52 flex flex-col justify-center w-full'>
              <button onClick={() => generateDeck()}>Generate Deck</button>
              <button onClick={() => drawCard()}>Draw Card</button>
              {/* <button></button> */}
          </div>
        
      <Help showHelp={showHelp} setShowHelp={setShowHelp} />

      </div>


    </div>
  )
}

export default App
