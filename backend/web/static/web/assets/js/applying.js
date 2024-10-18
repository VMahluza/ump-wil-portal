const studentNumberInputEl = document.getElementById('id_student_number');
const nextStepBtnEl = document.getElementById('next-step-btn')
const backStepBtn = document.getElementById('back-step-btn')
 
const firstPartOfStep1InputsEl  = document.getElementById('first-part-of-step1');
const secondPartOfStep1InputsEl  = document.getElementById('second-part-of-step1');
const firstNameInputEl = document.getElementById('id_first_name')
const lastNameInputEl = document.getElementById('id_last_name')

const applicationStep1El = document.getElementById('application-step1')
const applicationStep2El = document.getElementById('application-step2')

studentNumberInputEl.onchange = (e) => {
    const studentNumber = (e.target.value).toString();
    // Fetch students from the Django API
    studentNumber.length

    if (studentNumber.length === 9) {
        fetch('/api/app/students/registered')
        .then(response => response.json())
        .then(data => {
            const students = data.students;
            const foundStudent = students.find(student => student.student_number === studentNumber);
            if(foundStudent){
                firstPartOfStep1InputsEl.style.display = 'block';
                secondPartOfStep1InputsEl.style.display = 'block';

                firstNameInputEl.value = foundStudent.first_name
                lastNameInputEl.value = foundStudent.last_name

            }

        })
        .catch(error => {
            console.error('Error fetching students:', error);
        }); 
    }
}

nextStepBtnEl.onclick = (e)=>{
    console.log('Next Step');

    console.log(applicationStep1El)
    applicationStep2El.style.display = 'block'
    applicationStep1El.style.display = 'none';
}

backStepBtn.onclick = (e)=>{
    console.log('Next Step');

    console.log(applicationStep1El)
    applicationStep2El.style.display = 'none'
    applicationStep1El.style.display = 'block';
}
