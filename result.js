
const calculate = () =>{
  let english = document.getElementById('english').value;
  let maths = document.getElementById('maths').value;
  let comp = document.getElementById('comp').value;
  let phy = document.getElementById('phy').value;
  let chem = document.getElementById('chem').value;
  let grade = "";


  let totalMarks = parseFloat(english) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy) + parseFloat(chem);
  alert(totalMarks);

  let percentage = (totalMarks/500) * 100;
  alert(percentage);



  if(percentage <= 100  && percentage >= 80){
    grade = 'A';
  }else if(percentage <= 79  && percentage >= 60){
     grade = 'B';
  }else if(percentage <= 59  && percentage >= 40){
     grade = 'C';
  }else{
     grade = 'F';
  }

  if(percentage >= 39.5){
    document.getElementById('showData').innerHTML = ` Your Total Marks out of 500 is  ${totalMarks} and percentage is ${percentage}%. <br> Your grade is ${grade}. <br>You are Pass. `
  }
  else{
    document.getElementById('showData').innerHTML = ` Your Total Marks out of 500 is  ${totalMarks} and percentage is ${percentage}%. <br> Your grade is ${grade}. <br>You are Fail. `
  }

  
}
