const alfy = require('alfy');
const superscript = require('superscript-text');

const superscriptedText = superscript(alfy.input);
alfy.output([{
    title: `Copy your superscripted text to the clipboard`,
    subtitle: superscriptedText,
    arg: superscriptedText
}]);