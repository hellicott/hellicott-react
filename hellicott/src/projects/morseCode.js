import '../App.css';
import React, { useState } from 'react';
import { BinaryTree } from '../components/binaryTree.js';
import ProjectTemplate from '../components/projectTemplate.js';
import HellicottButton from '../components/Button.js';

const tree = new BinaryTree('root', '')
tree.insert('e', { dot: true }, 'root');
tree.insert('i', { dot: true }, 'e');
tree.insert('a', { dash: true }, 'e');
tree.insert('s', { dot: true }, 'i');
tree.insert('u', { dash: true }, 'i');
tree.insert('r', { dot: true }, 'a');
tree.insert('w', { dash: true }, 'a');
tree.insert('h', { dot: true }, 's');
tree.insert('v', { dash: true }, 's');
tree.insert('f', { dot: true }, 'u');
tree.insert('l', { dot: true }, 'r');
tree.insert('p', { dot: true }, 'w');
tree.insert('j', { dash: true }, 'w');
tree.insert('5', { dot: true }, 'h');
tree.insert('4', { dash: true }, 'h');
tree.insert('3', { dash: true }, 'v');
tree.insert('uDash', { dash: true }, 'u', '');
tree.insert('2', { dash: true }, 'uDash');
tree.insert('rDash', { dash: true }, 'r', '');
tree.insert('+', { dot: true }, 'rDash');
tree.insert('1', { dash: true }, 'j')
tree.insert('t', { dash: true }, 'root')
tree.insert('n', { dot: true }, 't')
tree.insert('m', { dash: true }, 't')
tree.insert('d', { dot: true }, 'n')
tree.insert('k', { dash: true }, 'n')
tree.insert('o', { dash: true }, 'm')
tree.insert('g', { dot: true }, 'm')
tree.insert('b', { dot: true }, 'd')
tree.insert('x', { dash: true }, 'd')
tree.insert('c', { dot: true }, 'k')
tree.insert('y', { dash: true }, 'k')
tree.insert('z', { dot: true }, 'g')
tree.insert('q', { dash: true }, 'g')
tree.insert('6', { dot: true }, 'b')
tree.insert('=', { dash: true }, 'b')
tree.insert('/', { dot: true }, 'x')
tree.insert('7', { dot: true }, 'z')
tree.insert('odot', { dot: true }, 'o', '')
tree.insert('odash', { dash: true }, 'o', '')
tree.insert('8', { dot: true }, 'odot')
tree.insert('9', { dot: true }, 'odash')
tree.insert('0', { dash: true }, 'odash')

function MorseCodeTranslator() {
  const [translation, setTranslation] = useState("Translation will appear here");

  return (
    <div id="morseCodeTranslator" className="App">   
    <ProjectTemplate heading={"Morse Code Translator"} bgColour={"CadetBlue"}>
      <div className='inner-app-section'>
        <p>
          Translate morse code into text
        </p>
        <form onChange={handleInput}>
          <label>
            Morse Code: 
            <input name="morseInput"/>
          </label>
          <HellicottButton type="reset" onClick={handleClear}>Clear</HellicottButton>
        </form>
        <div className='translationOutput'>
          {translation}
        </div>
      </div>
    </ProjectTemplate>       
    </div>
  );

  function handleInput(e){
      e.preventDefault();

      const result = decode_sentence(e.target.value);

      setTranslation(result);


  }

  function handleClear(e){

    setTranslation("Translation will appear here");

  }
}


function decode_letter(morse_letter) {
  var current_node = tree.root

  try{
    for (var character of morse_letter) {
  
        if (character === "-") {
            current_node = current_node.getDash()
        }
  
        if (character === ".") {
            current_node = current_node.getDot()
        }
  
    }
  }
  catch(e){
          return ''
        }

  return current_node.value

}

function decode_word(morse_word) {
    const letters = morse_word.split(" ")
    let word = ""

    for (var letter of letters) {
        console.log("The letter we're decoding: ", letter)
        word += decode_letter(letter)
        console.log("Word so far: ", word)
    }

    return word

}

function decode_sentence(sentence) {
    const words = sentence.split(' / ');
    const result = [];

    for (var word of words) {
        result.push(decode_word(word));
    }
    
    return result.join(' ');
}



// const big_test = "----- .---- ..--- ...-- ....- / ..... -.... --... ---.. ----. / ----- -...- -..-. .-.-. / -.-- .- -.-- / .. - / .-- --- .-. -.- ..."
// console.log("Here goes nothing! ", decode_sentence(big_test))


export default MorseCodeTranslator;