/*
27. Complementary DNA
DNA is a chemical found in the nucleus of cells and carries the "instructions" for the development 
and functioning of living organisms. In DNA strings, symbols "A" and "T" are complements of each other, 
as are "C" and "G". Given one side of the DNA, write a function that returns the other complementary side.
The DNA strand is never empty.
*/

const DNAStrand = dna => {

    let letters = dna.split('')

    for (let i = 0; i<letters.length; i++){
        if (letters[i] == 'A')
        letters[i]= 'T'
        else if (letters[i] == 'T')
        letters[i]= 'A'
        else if (letters[i] == 'C')
        letters[i]= 'G'
        else if (letters[i] == 'G')
        letters[i]= 'C'

    }
    
    return letters.join('')

  };
  
  console.log(DNAStrand('AAAA')); // 'TTTT'
  console.log(DNAStrand('ATTGC')); // 'TAACG'
  console.log(DNAStrand('GTAT')); // 'CATA'