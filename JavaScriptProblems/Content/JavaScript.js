//question 1:
function checkPalindrome() {
    var userResponse = prompt('word')
    var var2 = userResponse.split('').reverse().join('');
    if (userResponse === var2) {
        alert('This is a palindrome');
    }
    else {
        alert('This is NOT a palindrome');
    }
}

//question 2:
function alphOrder() {
    var userResponse = prompt('word')
    var var2 = userResponse.split('').sort().join('').toString();
    alert(var2);
}
