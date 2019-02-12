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
function compute()
{
    let equation = document.getElementById("command").innerText;
    let result = document.getElementById("result");
    //If the value in "result" is a valid number...
    if(!isNaN(result.innerText))
    {
        //Check to see if the command begins with +-*/...
        let pattern = new RegExp("^[+/*-].+");
        if(pattern.test(equation))
        {
            //If yes, prepend the result to the equation, resulting in
            //result +-*/ equation
            equation = result.innerText + equation;
        }
    }
    try
    {
        //Attempt to evaluate the equation
        //
        //eval() is not secure and should not be used!!!
        //I don't see a way around this though without using a library
        result.innerText = eval(equation);
    }
    catch (err)
    {
        //If the command was not a valid expression, inform the user
        result.innerText = "Error: Invalid Expression";
    }
    document.getElementById("command").innerText = "";
}

//Reset the calculator. Removes current command and sets result to 0
function clearAll()
{
    document.getElementById("command").innerText = "";
    document.getElementById("result").innerText = "0";
}