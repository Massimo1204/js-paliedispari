const userInputPalindrome = document.getElementById('user-input-palindrome');
const resultPalindrome = document.getElementById('result-palindrome');
const evenButton = document.getElementById('pari');
const oddButton = document.getElementById('dispari');
const oddEvenInput = document.getElementById('odd-even-input');
const oddEvenResult = document.getElementById('game-result');
let oddOrEven;

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

function randomNumberGenerator(){
    return (Math.floor(Math.random()*4)+1);
}
for(let i=0;i<100;i++){
    console.log(randomNumberGenerator());

}
function playOdd(){
    oddOrEven = 1;
    return oddOrEven;
}
function playEven(){
    oddOrEven = 0;
    return oddOrEven;
}

userInputPalindrome.addEventListener('keypress', function(e) {
    if(e.key == 'Enter'){  
        displayPalindromeResult(checkPalindrome(userInputPalindrome.value.toLowerCase()));
    }
});

oddButton.addEventListener('click',playOdd);
evenButton.addEventListener('click',playEven);

oddEvenInput.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){  
        let sum=0;
        if(oddOrEven==0){
            sum =parseInt(randomNumberGenerator())+parseInt(oddEvenInput.value);
            oddEvenResult.innerHTML=randomNumberGenerator()+' + '+ oddEvenInput.value +' = '+sum;
            if(sum%2==0){
                oddEvenResult.innerHTML+='  hai vinto ';
            }
            else {
                oddEvenResult.innerHTML+='  hai perso ';
            }
        }
        if(oddOrEven==1){
            sum =parseInt(randomNumberGenerator())+parseInt(oddEvenInput.value);
            oddEvenResult.innerHTML=randomNumberGenerator()+' + '+ oddEvenInput.value +' = '+sum;
            if(sum%2==0){
                oddEvenResult.innerHTML+='  hai perso ';
            }
            else {
                oddEvenResult.innerHTML+='  hai vinto ';
            }
        }
    }
});