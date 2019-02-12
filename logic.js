let equalsPressed = false;

//When an input button is pressed, takes the innerText of the button
//and adds it to the command being constructed in "result"
function inputButton(buttonVal)
{
    let inputField = document.getElementById("input");
    let pattern = new RegExp("^[+/*-]");
    if(inputField.innerText === "Error: Invalid Expression")
    {
        inputField.innerText = buttonVal;
        equalsPressed = false;
    }
    else if(inputField.innerText === "0")
    {
        inputField.innerText = buttonVal;
        equalsPressed = false;
    }
    else if(equalsPressed && !pattern.test(buttonVal))
    {
        document.getElementById("prevCommand").innerText = "Ans=" + inputField.innerText;
        inputField.innerText = buttonVal;
        equalsPressed = false;
    }
    else
    {
        inputField.innerText = inputField.innerText + buttonVal;
        equalsPressed = false;
    }
}

//When the = button is pressed, takes the equation and evaluate it,
//and store the equation in the prevCommand position
function compute()
{
    let equation = document.getElementById("input").innerText;
    let result = document.getElementById("input");
    document.getElementById("prevCommand").innerText = equation + "=";
    equalsPressed = true;
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
}

//Reset the calculator. Removes current command and sets result to 0
function clearAll()
{
    document.getElementById("prevCommand").innerText = "";
    document.getElementById("input").innerText = "0";
    equalsPressed = false;
}