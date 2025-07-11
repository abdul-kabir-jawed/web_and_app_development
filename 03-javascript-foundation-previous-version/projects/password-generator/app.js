
var passwordLengthInput = document.getElementById('password_length');
var includeNumbersCheckbox = document.getElementById('include_numbers');
var includeSymbolsCheckbox = document.getElementById('include_symbols');
var includeAlphabetsCheckbox = document.getElementById('include_alphabets');
var generateButton = document.getElementById('generate');
var passwordOutput = document.getElementById('password');
var passwordOutput = document.getElementById('password');
var lengthPlusButton = document.getElementById('length_plus');
var lengthMinusButton = document.getElementById('length_minus');


var numbers = '0123456789';
var symbols = '!@#$%^&*()-+';
var alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function generatePassword(length, useNumbers, useSymbols, useAlphabets) {
    var charset = '';
    if (useNumbers) charset += numbers;
    if (useSymbols) charset += symbols;
    if (useAlphabets) charset += alphabets;
    var password = '';
    for (let i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * charset.length);
        password += charset[randomNumber];
    }
    return password;
}


function increaseLength() {
    var current = parseInt(passwordLengthInput.value) || 0;
    passwordLengthInput.value = current + 1;
}

function decreaseLength() {
    var current = parseInt(passwordLengthInput.value) || 0;
    if (current > 1) {
        passwordLengthInput.value = current - 1;
    }
}

function generatePasswordFromUI() {
    var length = parseInt(passwordLengthInput.value);
    var useNumbers = includeNumbersCheckbox.checked;
    var useSymbols = includeSymbolsCheckbox.checked;
    var useAlphabets = includeAlphabetsCheckbox.checked;

    
    passwordOutput.innerHTML = '';

    if (!length || length < 1) {
        passwordOutput.innerHTML = '';
        passwordOutput.innerHTML = 'Please enter a valid length.';
        return;
    }
    if (!useNumbers && !useSymbols && !useAlphabets) {
        passwordOutput.innerHTML = '';
        passwordOutput.innerHTML = 'Select at least one character type!';
        return;
    }else{
    var password = generatePassword(length, useNumbers, useSymbols, useAlphabets);
    passwordOutput.innerHTML = password;
    }
}
