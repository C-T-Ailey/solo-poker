import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import gambler from './assets/8bitgambler.mp3'
import helpChip from './assets/help_chip.png'
import './App.css'
import Help from './components/Help'

function App() {

  // ###### STATES #####
  
  // state managing the help modal view
  const [showHelp, setShowHelp] = useState(false)

  // state managing whether jokers have been unlocked for inclusion in deck generation
  const [jokersUnlocked, setJokersUnlocked] = useState(false)

  // state managing the contents of the deck
  const [deck, setDeck] = useState([])

  // state managing the contents of the player's hand
  const [hole, setHole] = useState([])

  // state managing the contents of the community cards
  const [community, setCommunity] = useState([])


  // ##### HOOKS #####

  // useeffect hook for debugging the deck state
  useEffect(()=>{
    console.log(deck)
  },[deck])



  // ##### VARIABLES/CLASSES #####

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


  // ##### FUNCTIONS #####

  // function for generating random integers
  const randInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
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

  // debug function for drawing a card from the deck
  const drawCard = () => {
    let deckCopy = Array.from(deck);

    const drawnCard = deckCopy.pop();

    setDeck(deckCopy);

    console.log(drawnCard);

    return drawnCard;
  }

  const dealOut = () => {

    if(!!deck.length){
      let deckCopy = Array.from(deck);

      // deal to player
      let counter = 0;
      let holeAssembly = [];
      while (counter < 2) {
        holeAssembly.push(deckCopy.pop());
        counter++;
      };
      
      // deal to community
      counter = 0;
      let communityAssembly = [];
      while (counter < 5) {
        communityAssembly.push(deckCopy.pop());
        counter++;
      };
      
      // set hole and community states
      setHole(holeAssembly);
      setCommunity(communityAssembly);
      setDeck(deckCopy);
    } else {
      console.log("deck not initialized")
    }


  }



  // ##### RENDER #####

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
            <br/>
            {!!deck.length ? `Next card: ${deck[deck.length-1].name()}` : "deck not initialized"}
          </div>

          <div id='help' className='absolute right-0 w-fit h-fit m-4'>
            <img id="help-chip" alt='help button' src={helpChip} className='w-48 h-48' onClick={() => {setShowHelp(!showHelp)}}/>
          </div>
          
          <div id='community' className='m-auto h-fit w-fit flex flex-row'>
            {!!community.length ? 
             community.map((card, index) => (
              <div key={index} className='w-28 h-40 rounded-lg border-white border-dashed border-4 opacity-75 mx-4 flex items-center justify-center text-white'>
                {card.name()}
              </div>
             ))
             : 
             [1,2,3,4,5].map((number, index) => (
              <div key={index} className='w-28 h-40 rounded-lg border-white border-dashed border-4 opacity-75 mx-4 flex items-center justify-center text-white'>
                {number}
              </div>
            ))}
          </div>

          <div id='hole' className='absolute bottom-0 w-52 h-52 right-0 bg-white flex flex-col'>
            {!!hole.length ? hole.map((card, index) => <div key={index}>{card.name()}</div>) : "Hole Cards"}
          </div>

          <div id='chips' className='absolute flex bottom-0 h-52 w-52 bg-white'>
            Chips and betting
          </div>

        {/* </div> */}

          <div id="testbuttons" className='absolute bottom-52 flex flex-col items-center w-full'>
              <button className='bg-white hover:bg-slate-200 w-fit mb-4 p-1 rounded-md border-double border-4 border-black' onClick={() => generateDeck()}>Start Game</button>
              {/* <button className='bg-white hover:bg-slate-200 w-fit mb-4 p-1 rounded-md border-double border-4 border-black' onClick={() => drawCard()}>Draw Card</button> */}
              <button className='bg-white hover:bg-slate-200 w-fit mb-4 p-1 rounded-md border-double border-4 border-black' onClick={() => dealOut()}>Deal Out</button>
              {/* <button></button> */}
          </div>
        
      <Help showHelp={showHelp} setShowHelp={setShowHelp} />

      </div>


    </div>
  )
}

export default App
