const form = document.querySelector('form');

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)




form.addEventListener('submit',(e)=>{
    e.preventDefault();

    document.querySelector('#under').style.color = '';
    document.querySelector('#normal').style.color = '';
    document.querySelector('#over').style.color = '';


    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = `Please Enter a Valid height ${height}`;
    } else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = `Please Enter a Valid weight ${weight}`;
    } else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
        if(bmi<18.6){
            document.querySelector('#under').style.color = 'red';
        } else if(bmi>=18.6 && bmi <=24.9){
            document.querySelector('#normal').style.color = 'green';
        } else{
            document.querySelector('#over').style.color = 'red';
        }
    }

})