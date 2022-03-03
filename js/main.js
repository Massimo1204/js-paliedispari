const userInputPalindrome = document.getElementById('user-input-palindrome');
const resultPalindrome = document.getElementById('result-palindrome');
const evenButton = document.getElementById('pari');
const oddButton = document.getElementById('dispari');
const oddEvenInput = document.getElementById('odd-even-input');
const oddEvenResult = document.getElementById('game-result');

function keyEnter(e){
    if(e.keyCode == '13'){  
        displayPalindromeResult(checkPalindrome(userInputPalindrome.value.toLowerCase()));
    }
}

function displayPalindromeResult(check){
    if(check==true){
        resultPalindrome.classList.remove('text-danger');
        resultPalindrome.classList.add('text-success');
        resultPalindrome.innerHTML=' la parola è palindroma';
    }
    else if (check == false){
        resultPalindrome.classList.remove('text-success');
        resultPalindrome.classList.add('text-danger');
        resultPalindrome.innerHTML=' la parola non è palindroma';
    }
    else if (check == 'vuoto'){
        resultPalindrome.classList.remove('text-success');
        resultPalindrome.classList.remove('text-danger');
        resultPalindrome.innerHTML = 'inserisci una parola';
    }
}

function checkPalindrome(word){
    let palindrome=0;
    if(word.length==0){
        return 'vuoto';
    }
    else{
        for(let i=0; i<word.length ;i++){
            console.log(word.charAt(i));
            console.log(word.charAt(word.length-i-1));
            if(word.charAt(i) != word.charAt(word.length-i-1)){
                palindrome += 1;
            }
        }
        if(palindrome==0){
            return true;
        }else{
            return false;
        }
    }
}

function playOddEven(){}

userInputPalindrome.addEventListener('keypress', keyEnter);
evenButton.addEventListener('click',playOddEven);
oddEvenInput.addEventListener('keypress', keyEnter);