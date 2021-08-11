# Rock, Paper, Scissors!

Rock, Paper, Scissors is a web app that allows users to play one of two different versions of the game against a computer opponent.

## Installation

As private repositories on the free version of GitHub cannot deploy pages, the Rock, Paper, Scissors repo should be cloned to the user's local machine.

## Usage and Demonstration

**How to use Rock, Paper Scissors:**

- The user plays games of rock, paper, scissors against a computer player.

- The user can select between one of two game modes:
  - Classic, using traditional rock, paper, and scissors characters
  - SpongeBob Death Brawl, using characters based on the SpongeBob Squarepants television program

- Once inside a game mode, the user selects a character, and is then shown a matchup of their selected character against the computer's (randomly) selected character, along with a message declaring a winner or draw

- The game board is then automatically reset, directing the user back to the character selection screen

- While on the character selection screen, the user is shown a button allowing to change modes

- The number of wins across game modes will persist in the wins column when the user returns to the site on later visits

![recording (1)](https://media.giphy.com/media/aFh1hkg6nW1wRKCGWi/giphy.gif)
(This gif is a little blurry, but the computer's win count does in fact increment to 2 and 3 and persist with refreshes.)


## Programming Languages and Dependencies

**This app was developed using:**

- JavaScript
- HTML
- CSS

## Architecture

- main.js for all DOM manipulation
- player.js for construction of the Player class, which tracks data for Human and Computer gameplay across all game modes and site visits on the same browser
- game.js for construction of the Game class, which contains the data for game type, ruleset for each game type, outcome determination, and board reset on the data side
- index.html
  - custom fonts linked herein
- styles.css

## Wins

- Rock and Mentor (on this repo) both praised my implementation and clean JS, which felt good
- A lot of functionality that I had expected to deal with in later iterations kind of wrote itself before I got to them. In hindsight I think the way I conceived of the structure of my site made that easy
- I managed to do a couple clean JS refactors on the last day of project work
- Styling from the ground up felt pretty easy for this project

## Challenges + Improvements

- My use of localStorage was pretty limited as I only needed to store simple data types, & thus didn't need to format or parse data for the app to work as intended. With more time I would've been interested in trying more complex storage operations, perhaps with login info
- Would've liked to implement custom user names and icons - I think the way I scoped my Player data would lend itself to that without too much work
- Would've liked to implement light/dark mode or other theme switching, for practice
- Would've liked to find a way to streamline my show characters functions, have one that takes an argument for the game type instead of needing separate functions

## Contributions

**Developer:**

_This app was developed by:_

- [Nolan Caine](https://github.com/n0land0)

_Nolan is a student of front-end engineering at the Turing School of Software & Design._

 - Project spec provided by the [Turing School of Software & Design](https://turing.edu/).
 - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html)
