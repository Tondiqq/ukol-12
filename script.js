const textAreaVstup = document.querySelector("#Vstup");
const textAreaVystup = document.querySelector("#Vystup");

function kodovaciFunkce(Vstup) {
    return Vstup;
}


textAreaVstup.onkeydown = function () {
    textAreaVystup.value = kodovaciFunkce(textAreaVstup.value);
}