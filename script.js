const R = 0;
const G = 1;
const B = 2;
const H = 0;
const S = 1;
const L = 2;
const propertiesPallet = [
    '.website-background{ color: ',
    '.element-text{ color: ',
    '.element-border{ border-color: ',
    '.element-background{ background-color: ',
    '.header{ color: '
];
const partitions = 5;

function randomPalette() {
    var increment = 360 / partitions;
    var saturation = Math.random();
    var lightness = Math.random();
    var hue = generateNumber(0, 359);
    var colors = [];
    for (var i = 0; i < partitions; i++) {
        colors.push(hslToRgb(hue / 360, saturation, lightness));
        hue = (hue + increment) % 360;
    }
    generateRules(colors);
}

function generateRules(value) {
    let text = '';
    for (var i = 0; i < value.length; i++) {
        rule = css(value[i]);
        text = text + `${propertiesPallet[i]}${rule}; }\n`;
        document.getElementById(`color${i + 1}`).style.background = rule;
    }
    document.getElementById('css-rules').value = text;
}

function css(rgb) {
    return `rgb(${rgb[R]}, ${rgb[G]}, ${rgb[B]})`;
}

function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clean() {
    let cssText = '';
    for (var i = 0; i < partitions; i++) {
        cssText = cssText + `${propertiesPallet[i]}#FFFFFF; }\n`;
        document.getElementById(`color${i + 1}`).style.background = '#FFFFFF';
    }
    document.getElementById('css-rules').value = cssText;
}