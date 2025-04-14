const textAreaVstup = document.querySelector("#Vstup");
const textAreaVystup = document.querySelector("#Vystup");

function kodovaciFunkce(Vstup) {
    const morseCodeMap = {
        'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
        'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
        'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
        'y': '-.--', 'z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', ' ': '/'
    };

    
    const normalizedInput = Vstup.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    return normalizedInput
        .split('')
        .map(char => morseCodeMap[char] || '')
        .filter(code => code !== '') 
        .join('|'); 
}

textAreaVstup.addEventListener("input", function () {
    textAreaVystup.value = kodovaciFunkce(textAreaVstup.value);
});