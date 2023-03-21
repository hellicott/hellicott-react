# Bowling Score Calculator Code Dojo

### Create a program which will take in a list of pins knocked down in a game of bowling and calculate the score

#### Example:
Input: 9,1,2,0,4,6,10,10,6,2,7,1,5,0,0,7,2,8,4

Output: 120

#### Ideas of how to begin and extend this task
1. Simply calculate the score without any bonus points or additional rolls.
2. Update the program so that when a player hits all 10 pins in one roll (a strike) they get the next two bowls doubled.
3. Update the program so that when a player hits all 10 pins in 2 rolls (a spare) they get the next bowl doubled.
4. Update the program to handle this: On the final frame there is a possibility to get a third roll if all 10 pins are knocked down within the first two throws.
5. Add input validation to ensure no more than 10 pins have been knocked down per frame
6. Update this program so it can read in score sheet notation where strikes are 'X' and spares are '/'. So a game with 3 frames might look like '7/X81' where in the first frame the scored 7 then 3, the second frame all 10 and the third frame 8 then 1
7. Extend this program so that it can work with any number of pins


#### Links
A basic example of a working program can be found at [hellicott.co.uk](https://www.hellicott.co.uk/)

The source code for this can be found [in this repo](../projects/bowlingScore.js)
