const userInputPalindrome = document.getElementById('user-input-palindrome');
const resultPalindrome = document.getElementById('result-palindrome');
const evenButton = document.getElementById('pari');
const oddButton = document.getElementById('dispari');
const oddEvenInput = document.getElementById('odd-even-input');
const oddEvenResult = document.getElementById('game-result');
const oddEvenInputContainer = document.getElementById('odd-even-input-container');
const oddEvenChoice = document.getElementById('choice');
let oddOrEven;

function keyEnterPalindrome(e) {
    if(e.key == 'Enter'){  
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

function randomNumberGenerator(spectrum,startingPoint){
    return (Math.floor(Math.random()*spectrum)+startingPoint);
}
for(let i=0;i<100;i++){
    console.log(randomNumberGenerator());

}
function playOdd(){
    oddEvenResult.innerHTML='';
    oddEvenInputContainer.classList.remove('d-none');
    oddEvenChoice.innerHTML = "Hai scelto <span class='text-warning fw-bold'> Dispari</span>";
    oddOrEven = 1;
    return oddOrEven;
}
function playEven(){
    oddEvenResult.innerHTML='';
    oddEvenInputContainer.classList.remove('d-none');
    oddEvenChoice.innerHTML = "Hai scelto <span class='text-danger fw-bold'> Pari</span>";
    oddOrEven = 0;
    return oddOrEven;
}

function displayNumbersPlayed(sum, randNum,userInput){
    sum = randNum+userInput;
    oddEvenResult.innerHTML+= "Hai giocato <span class='text-primary fw-bold'>"  + userInput +"</span><br> Il computer gioca<span class='text-danger fw-bold'> "+randNum+  "</span> <br> Somma = <span class='text-success fw-bold'>"+sum+"</span><br>";
}

function checkGameResult(oddOrEven , userInput){
    let sum=0;
    let randNum=randomNumberGenerator(5,1);

    if(isNaN(userInput) || userInput==''){
        oddEvenResult.innerHTML="<span class='text-danger'>Attenzione!</span> <br> non hai inserito un numero.";
    }
    else if (userInput > 5 || userInput<1){
        oddEvenResult.innerHTML="<span class='text-danger'>Attenzione!<br></span> inserisci un numero compreso tra 1 e 5.";
    }
    else if(oddOrEven==0){
        displayNumbersPlayed(sum,randNum,userInput);
        if(sum%2==0){
            oddEvenResult.innerHTML+=" <span class='text-primary  fw-bold my-text-size'> hai vinto!</span> ";
        }
        else {
            oddEvenResult.innerHTML+=" <span class='text-danger fw-bold my-text-size> hai perso!</span> ";
        }
    }
    else if(oddOrEven==1){
        displayNumbersPlayed(sum,randNum,userInput);
        if(sum%2==0){
            oddEvenResult.innerHTML+=" <span class='text-danger  fw-bold my-text-size'> hai perso!</span> ";
        }
        else {
            oddEvenResult.innerHTML+=" <span class='text-primary fw-bold my-text-size'> hai vinto!</span> ";
        }
    }
}

function keyEnterOddEven(e){
    if(e.key == 'Enter'){  
        oddEvenInputContainer.classList.add('d-none');
        checkGameResult(oddOrEven , parseInt(oddEvenInput.value));
        oddEvenInput.value='';
    }
}


userInputPalindrome.addEventListener('keypress', keyEnterPalindrome);

oddButton.addEventListener('click',playOdd);
evenButton.addEventListener('click',playEven);

oddEvenInput.addEventListener('keypress', keyEnterOddEven);