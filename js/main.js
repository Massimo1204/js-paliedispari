const userInput = document.getElementById('user-input');
const result = document.getElementById('result');

function keyEnter(e){
    if(e.keyCode == '13'){
        if(checkPalindrome(userInput.value)==true){
            result.classList.remove('text-danger');
            result.classList.add('text-success');
            result.innerHTML=' la parola è palindroma';
        }
        else{
            result.classList.remove('text-success');
            result.classList.add('text-danger');
            result.innerHTML=' la parola non è palindroma';
        }
    }
}

function checkPalindrome(word){
    let palindrome=0;
    for(let i=0; i<word.length ;i++){
        console.log(word.charAt(i));
        console.log(word.charAt(word.length-i-1));
        if(word.charAt(i) != word.charAt(word.length-i-1)){
            palindrome += 1;
        }
        console.log(palindrome);
    }
    if(palindrome==0){
        return true;
    }else{
        return false;
    }
}
userInput.addEventListener('keypress', keyEnter);