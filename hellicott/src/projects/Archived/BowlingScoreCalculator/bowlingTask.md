# Bowling Score Calculator Code Dojo

### Create a program which will take in a list of pins knocked down in a game of bowling and calculate the score

A good starting point will be to take a look at [this explaination](https://www.myactivesg.com/sports/bowling/how-to-play/bowling-rules/how-are-points-determined-in-bowling) of how bowling scores work

#### Example:

This game of bowling had 10 frame, with up to 2 bowls each frame (expect for the bonus bowl on the 10th frame). The table shows for number of pins knowcked down each bowl across the 10 frames. Notice that for when they bowled a strike, there is only one bowl for that frame equalling 10 pins knocked over

| Frame 1  | Frame 2  | Frame 3  | Frame 4  | Frame 5  | Frame 6  | Frame 7  | Frame 8  | Frame 9  | Frame 10 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | 
|   9, 1   |   2, 0   |   4, 6   |    10    |    10    |   6, 2   |   7, 1   |   5, 0   |   0, 7   |  2, 8, 4 |

Here is what the input into the code would look like for the above game

```9,1,2,0,4,6,10,10,6,2,7,1,5,0,0,7,2,8,4```

And once all the doubles have been calculated here is the final score that should be outputted

```120```

#### Ideas of how to begin and extend this task
1. Simply calculate the score without any bonus points or additional rolls.
2. Add input validation to ensure it is a possible score i.e. no more than 10 pins have been knocked down per frame
3. Update the program so that when a player hits all 10 pins in one roll (a strike) they get the next two bowls doubled.
4. Update the program so that when a player hits all 10 pins in 2 rolls (a spare) they get the next bowl doubled.
5. Update the program to handle this: On the final frame there is a possibility to get a third roll if all 10 pins are knocked down within the first two throws.
6. Update this program so it can read in score sheet notation where strikes are 'X' and spares are '/'. So a game with 3 frames might look like '7/X81' where in the first frame the scored 7 then 3, the second frame all 10 and the third frame 8 then 1
7. Extend this program so that it can work with any number of pins


#### Links
A basic example of a working program can be found at [hellicott.co.uk](https://www.hellicott.co.uk/) thought I can't promise there are no bugs!

The source code for this can be found [in this repo](../projects/bowlingScore.js)
