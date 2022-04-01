//var name = 'Ania' - global variable
//case for var - function + global scoped
function findX() {
    var x = 1;  //local variable
    {
        var x = 2;
    }            //will be 2, because x has been declared as 2 after the 
    alert(x)     //if move to outside to call alert() function, value of x
                 //declaration. Gets 2
    alert('Hi ' + name)
}

findX()
//Global variable is declared 
//showAlert()

//case for let - block scoped
function findX() {
    let x = 1;
    {
        let x = 2;
    }
    alert(x)
}
findX()
//Unlike var, other let inside the function finds the findX() function outside
//its scope. Gets 1.
/**
 * for const case, it is same as let in the sense that we cannot access it when,
 * outside the scope, but it is also a constant (final value that doesn't change)
 * const - block scoped constant
 */