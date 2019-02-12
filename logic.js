//When an input button is pressed, takes the innerText of the button
//and adds it to the command being constructed in "command"
function inputButton(buttonVal)
{
    let output = document.getElementById("command");
    output.innerText = output.innerText + buttonVal;
}

//When the = button is pressed, takes the command from "command" and
//evaluates it, and places the result in "result". In the case of an
//invalid command, outputs and error into "result". If the command
//starts with one of +-*/ take the value from result and prepend it
//to the command
function evaluate()
{

}

//Reset the calculator. Removes current command and sets result to 0
function clearAll()
{
    document.getElementById("command").innerText = "";
    document.getElementById("result").innerText = "0";
}