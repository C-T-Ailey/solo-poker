# Solo Poker

## Concept and Rules Outline

The **Player** opens the app to a fresh game.

They can **Read the Rules** by clicking the "**Help**" chip, or they can **Start Playing** by clicking on the deck.

## Read the Rules

A modal view will open with two tabs; one to read the rules (as outlined below under **Start Playing**) and another to view the **Poker Glossary**. The game can be returned to at any time by closing this view.

## Poker Glossary
	
A dictionary of poker terminology to aid unfamiliar players, and a visual guide to the various hands.


## Start Playing

Upon starting the game, the **Deck** is shuffled, five face-down **Community Cards** will be placed on the table, and two face-up **Hole Cards** will be dealt to the **Player**.

The game will progress through 7 stages: 
-**Ante**
-**Flop Reveal**
-**Flop Betting**
-**Turn Reveal**
-**Turn Betting**
-**River Reveal**
-**Payouts**

At the **Ante** stage, the **Player** chooses their **Hand Bet** -- a poker hand they predict will appear during the round among the combined **Community** and **Hole Cards**.

The **Round End** condition is met as soon as the **Hand Bet** is fulfilled; the round will end and skip immediately to **Payouts** at such a time.

### Stage 1: Ante

The **Player** is prompted to select an initial bet of **Chips** to place, as well as a **Hand Bet** which they predict will be revealed by the **River Reveal** stage.

**Round End** if the **Player** already has **One Pair** as their **Hole Cards** and places their **Hand Bet** on **One Pair**.
- need to determine how likely this is to happen and adjust the one payout accordingly under this specific condition


### Stage 2: Flop Reveal

The **Flop**, or initial trio of **Community Cards**, is revealed.

**Round End** if the **Hand Bet** is fulfilled at this stage.


### Stage 3: Flop Betting

If the **Player**'s **Hand Bet** has not been met by this stage, the **Player** is given the opportunity to RAISE their bet, CHECK and proceed without changing, or FOLD to forfeit their **Chips** and trigger the **Round End**.


### Stage 4: Turn Reveal

The **Turn**, or fourth **Community Card**, is revealed.

**Round End** if the **Hand Bet** is fulfilled at this stage.


### Stage 5: Turn Betting

As with **Flop Betting**.


### Stage 6: River Reveal

The **River**, or fifth and final **Community Card**, is revealed.

The **Round End** occurs at this stage regardless of whether the **Hand Bet** was fulfilled.

### Stage 7: **Payouts**

A modal view opens with a summary of the round.

If the **Hand Bet** was fulfilled, the **Player** is congratulated and presented with a breakdown of their winning statistics, i.e.:
-**Hand Bet**
-Wager Placed (in **Chips**)
-**Hand Bet** Payout Rate (1:X)
-**Chips** Won
-Updated **Player Chips** Count
-Winning Streak Count
-Any UNLOCKS earned by the **Player** during that round


## UNLOCKS

Through various means, **Player**s can acquire **Unlocks** which will alter the game experience. These range from cosmetic changes, like new table backdrops and card backs, to new mechanics such as the addition of **Jokers** to the deck.

Some of these will be available to purchase with won **Chips** via the **Gift Shop**, but some will require some rare criteria to be fulfilled. Example: A unique Wild West-themed card set might be unlocked by winning a **Two Pair** **Hand Bet** specificially with a black Aces and Eights (Or possibly with any of the claimants for the title of Dead Man's Hand).

### MECHANICAL UNLOCKS

- **Jokers**
  - An unlock with two ranks.

  - Rank 1 unlocks **Mono**, a monochromatic Pierrot or Pagliaccio-type. Once unlocked, this card has a chance to appear like any other card, but will only take effect during the **River Reveal** stage: if the **Player** is only one card from fulfilling their **Hand Bet** at this final stage, **Mono** will automatically assume the value of that card to secure the win.

  - Rank 2 unlocks **Chroma**, a vibrant harlequin. Once unlocked, it can appear like **Mono**, but [possibilities: 1. Can instead be manually set to any value at any stage, only once per round (could potentially be gamed for a better payoff if it appears during the ante or flop) / 2. Will take effect as soon as it would benefit the **Player** instead of at the **River Reveal**]


- **Nudge**
  - An unlock with 3(?) ranks, each allowing an additional use per round. (Once a card has been altered, can only alter that card?)

  - Allows the **Player** to raise or lower any one card's value by a single increment, e.g. bump a 10 up to a Jack or lower it to a 9.


- **Tailor**
  - An unlock with two ranks, allowing players to make **alterations to their cards' suits**.

  - Rank 1 allows the **Player** the chance to change one card's suit (per round) to the other suit of the same colour (e.g. swap a King of Hearts to a King of Diamonds).

  - Rank 2 allows the **Player** to change one card's suit (per round) to a corresponding suit of the opposite colour (e.g. swap a Queen of Diamonds to a Queen of Clubs).


- **"Wizzerds: The Congress" Booster Pack**
  - An unlock with one rank.

  - At the start of any round, adds a small chance for one card in the deck to be replaced with a card from an entirely different, financially extortionate collectible card game. Effects TBD.


### COSMETIC UNLOCKS

Dead Man's Hand - Win a **Two Pair** **Hand Bet** with two pair aces and eights, each pair consisting of spades and clubs: "Wild Bill" table backdrop + card back

Three Pair - Win a **Two Pair** **Hand Bet** with a **Three Pair** hand: "Three dollar bill" card back, unlocks **Three Pair** as a **Hand Bet**

Royal Flushed Away - Reveal a Royal Flush in a round where you didn't bet on it: "The Fool" card back

Royal Rush - Win a round with a ROYAL FLUSH **Hand Bet**: "Round Table" table backdrop + "Coat of Arms" card back

But Doctor, I Am Pagliacci - Win a round thanks to **Mono**'s effect: "Melpomene" card back

High Custard-Pie-in-the-Sky Hopes - Win a round thanks to **Chroma**'s effect: "Thalia" card back

Royal Guard - Win a round with a **Royal Flush** **Hand Bet** at the **River Reveal** stage as a result of altering a card's value with **Mono**, **Chroma**, **Nudge** or **Tailor**