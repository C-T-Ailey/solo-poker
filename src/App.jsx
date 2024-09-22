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

  const [winningHand, setWinningHand] = useState("No Winner")


  // ##### HOOKS #####

  // useeffect hook for debugging the deck state
  useEffect(()=>{
    // console.log(deck)
  },[deck])

  // useeffect hook for debugging winning hands
  useEffect(()=>{
    detectRoyal(fullHand)
    detectFlush(fullHand);
    detectStraight(fullHand);
    detectOfKind(fullHand);
  },[community])



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

  // concatenated array of cards from community and hole
  let fullHand = community.concat(hole);

  let debugFlush = [
    new Card("Diamonds", "Ace", 1),
    new Card("Diamonds", "Three", 3),
    new Card("Diamonds", "Five", 5),
    new Card("Diamonds", "Seven", 7),
    new Card("Diamonds", "Nine", 9),
    new Card("Diamonds", "Jack", 11),
    new Card("Diamonds", "King", 13),
  ]

  let debugStraight = [
    new Card("Diamonds", "Ace", 1),
    new Card("Hearts", "King", 13),
    new Card("Clubs", "Ten", 10),
    new Card("Spades", "Jack", 11),
    new Card("Diamonds", "Four", 4),
    new Card("Hearts", "Nine", 9),
    new Card("Clubs", "Queen", 12),
  ]

  let debugRoyalCommunity = [
    new Card("Clubs", "Four", 4),
    new Card("Hearts", "King", 13),
    new Card("Diamonds", "Ace", 1),
    new Card("Diamonds", "King", 13),
    new Card("Diamonds", "Ten", 10),
    
  ]

  let debugRoyalHole = [
    new Card("Diamonds", "Queen", 12),
    new Card("Diamonds", "Jack", 11),
  ]


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



  
  
  // function for detecting hands containing X of a Kind, including Full House
  const detectOfKind = (arr) => {

    let kinds = {}

    // arrays for housing the values of detected Kinds
    let pairs = []

    let threeKind = []

    let fourKind = []


    // for each card in the argument array, filter the array down to cards which match the currently iterated card's rank and push them to their relevant housing array
    arr.forEach(card => {

      const rankMatches = arr.filter(filtered => filtered.rank === card.rank)
      
      rankMatches.forEach(match => {
        if(rankMatches.length === 2 && !pairs.includes(match.rank)){
          pairs.push(match.rank)

        }
        else if (rankMatches.length === 3 && !threeKind.includes(match.rank)){
          threeKind.push(match.rank)
        }
        else if (rankMatches.length === 4){
          fourKind.push(match.rank)
        }
      })

      // console.log(!!fourKind.length, !!threeKind.length, !!pairs.length)

    })
    
    // return winning hands depending on the length of the housing arrays, in order of priority
    if (!!fourKind.length){
      console.log("Four of a Kind") 
      setWinningHand("Four of a Kind")
    }
    else if (!!threeKind.length){
      if (!pairs.length){
        console.log("Three of a Kind") 
        setWinningHand("Three of a Kind")
      }
      else {
        console.log("Full House") 
        setWinningHand("Full House")
      }
    }
    else if (!!pairs.length){
      if (pairs.length === 1){
        console.log("One Pair")
        setWinningHand("One Pair") 
      }
      else {
        console.log("Two Pair") 
        setWinningHand("Two Pair")
      }
    }
    else {
      console.log("No winners")
      setWinningHand("No Winner") 
    }

  }

  const countMax = (arr) => {
    let suits = {Spades: 0, Clubs: 0, Diamonds: 0, Hearts: 0};

    arr.forEach(card => {
      suits[card.suit]++;
    })

    for (const suit in suits) {
      if (suits[suit] >= 5) {
        return suit
      }
    }
  }

  const detectFlush = (arr) => {
    // define an object for counting the number of cards of each suit
    let suits = {Spades: 0, Clubs: 0, Diamonds: 0, Hearts: 0}
    
    // for each card in the arg array, iterate the property value of its corresponding suit by one
    arr.forEach(card => {
      suits[card.suit]++;
    })

    // for each suit in suits, declare a flush if that suit's count is greater than or equal to 5
    for (const suit in suits) {
      // console.log(suit, suits[suit])
      if (suits[suit] >= 5) {
        setWinningHand(`${suit} flush`)
        return `${suit} flush`
      }
    }

    // otherwise, declare that no flush was found
    return "no flush"
  }

  const detectStraight = (arr) => {

    // sort the values of the input array
    let sortedValues = arr.map(card => card.value).sort((a,b) => a - b)
    // console.log("Sorted:", sortedValues)

    // create a set with duplicate values removed
    let uniqueValues = [...new Set(sortedValues)]
    // console.log("Unique:", uniqueValues)

    // empty array for pushing sequential numbers
    let sequenceCheck = []

    // let lastInSequence = null

    for (let i = 0; i < uniqueValues.length; i++) {
      const value = uniqueValues[i];

      const nextValue = uniqueValues[i+1]

      const previousValue = uniqueValues[i-1]

      const endOfArray = uniqueValues[uniqueValues.length - 1]

      if (value === uniqueValues[0] && nextValue === value + 1){
        // console.log("i = 0, next is in sequence")
        sequenceCheck.push(value)
      }
      else if (value === endOfArray && previousValue === value - 1) {
        sequenceCheck.push(value)
      }
      else if (nextValue === value + 1) {
        sequenceCheck.push(value)
      }
      else {
        // console.log("sequence broken")
        sequenceCheck = []
      }

      // console.log(sequenceCheck)
      
    }
    
    // console.log(sequenceCheck)
    if (sequenceCheck.length >= 5){
      console.log(`${sequenceCheck[sequenceCheck.length - 1]}-high Straight`)
      setWinningHand(`${sequenceCheck[sequenceCheck.length - 1]}-high Straight`)
      return true
    }
    else if ([1, 10, 11, 12, 13].every(i => uniqueValues.includes(i))) {
      console.log("Ace-high Straight")
      setWinningHand("Ace-high Straight")
      return true
    }

  }
  
  const detectRoyal = (arr) => {

    const royalRanks = [1,10,11,12,13]

    const filterSuit = arr.filter(card => card.suit === countMax(arr))

    const checkRoyalRank = (rank) => {return royalRanks.includes(rank)}

    const filterRanks = filterSuit.filter(card => royalRanks.includes(card.value))

    // console.log("filtered suit", filterSuit)

    // console.log("mapped ranks", filterRanks)

    // console.log("count", !!countMax(arr) ? countMax(arr) : 0)

    if(filterRanks.length >= 5){console.log("royal flush"); setWinningHand("Royal Flush")}

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
              <div key={index} className='w-28 h-40 rounded-lg border-white border-dashed border-4 opacity-75 mx-4 flex items-center justify-center text-white text-center'>
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

          <div id="winner" className='absolute bottom-24 w-full text-2xl text-center'>
              {winningHand}
          </div>

          <div id='chips' className='absolute flex bottom-0 h-52 w-52 bg-white'>
            Chips and betting
          </div>

        {/* </div> */}

          <div id="testbuttons" className='absolute bottom-52 flex flex-col items-center w-full'>
              <button className='bg-white hover:bg-slate-200 w-fit mb-4 p-1 rounded-md border-double border-4 border-black' onClick={() => generateDeck()}>Start Game</button>
              {/* <button className='bg-white hover:bg-slate-200 w-fit mb-4 p-1 rounded-md border-double border-4 border-black' onClick={() => drawCard()}>Draw Card</button> */}
              <button className='bg-white hover:bg-slate-200 w-fit mb-4 p-1 rounded-md border-double border-4 border-black' disabled={deck.length < 7} onClick={() => dealOut()}>Deal Out</button>
              <button className='bg-white hover:bg-slate-200 w-fit mb-4 p-1 rounded-md border-double border-4 border-black' onClick={() => {setCommunity(debugRoyalCommunity); setHole(debugRoyalHole)}}>Debug Hand</button>
          </div>
        
      <Help showHelp={showHelp} setShowHelp={setShowHelp} />

      </div>


    </div>
  )
}

export default App
