const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    let kilometer = document.querySelector('#kilometer');
    let petrol = document.querySelector('#petrol');
    let milege = document.querySelector('#milege');
    const results = document.querySelector('#results');
    e.preventDefault();
    kilometer = parseInt(kilometer.value);
    petrol = parseInt(petrol.value);
    milege = parseInt(milege.value);

    if (isNaN(kilometer) || isNaN(petrol)){
        results.textContent = "please enter a valid number!";
    }else if (kilometer < 0){
        results.textContent = "please enter a kilometer value > 0";
    }else if (petrol < 0){
        results.textContent = "please enter a valid petrol rate";
    }else if (milege < 0){
        results.textContent = "please enter a valid milege value";
    }else {
        let updown = (kilometer * 2);
        let liter= updown / milege;
        let rate = liter * petrol;
        results.textContent = `Rs.${rate} `;
        document.querySelector('#kilometer').value = '';
        document.querySelector('#petrol').value = '';
    }
})