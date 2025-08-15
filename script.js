const inputName = document.getElementById('name')
const inputPassword = document.getElementById('password')
const sentBtn = document.getElementById('sentBtn')


let accauntStydent = [
        {
        stydentId: 1110,
        stydentPassword: 2021,
        stydentName: 'xamidulla',
        stydentGroup: 'NF2074',
        stydentGrade: 'A+' ,
        teacher: 'shifu😆',
        stydentCoin: 844 ,
        stydentEnergy: 5030

    },
    {
        stydentId: 1107,
        stydentPassword: 2017,
        stydentName: 'figmachi🧟‍♀️',
        stydentGroup: 'NF2074' ,
         stydentGrade: 'C+' ,
        teacher: 'shifu😆',
        stydentCoin: 1004 ,
        stydentEnergy: 1030
    },

]
sentBtn.addEventListener('click', () => {
    const userId = Number(inputName.value); // Raqamga aylantirdik
    const userPassword = Number(inputPassword.value);
     

    const foundStudent = accauntStydent.find(student =>
        student.stydentId === userId && student.stydentPassword === userPassword
    );

    if (foundStudent) {
        alert('Siz: ' + foundStudent.stydentName);
        window.location.href = 'Home.html'; // Sahifani o‘zgartirish
        localStorage.setItem('student', JSON.stringify(foundStudent)); // Ma'lumotlarni localStorage ga saqlash
        
    } else {
        alert('Login yoki parol noto‘g‘ri!');
    }
});
const inputName = document.getElementById('name');
const inputPassword = document.getElementById('password');
const sentBtn = document.getElementById('sentBtn');

let accauntStydent = [
    {
        stydentId: 1110,
        stydentPassword: 2025,
        stydentName: 'Hamidulla',
        stydentGroup: 'NF2074',
        stydentGrade: 'A+',
        teacher: 'shifu😆',
        stydentCoin: 844,
        stydentEnergy: 5030
    },
    {
        stydentId: 1107,
        stydentPassword: 2017,
        stydentName: 'Odil',
        stydentGroup: 'NF2074',
        stydentGrade: 'C+',
        teacher: 'shifu😆',
        stydentCoin: 1004,
        stydentEnergy: 1030
    },
    {
       stydentId: 2012,
        stydentPassword: 4567,
        stydentName: 'Kozimjon',
        stydentGroup: 'NF2074',
        stydentGrade: 'B+',
        teacher: 'shifu😆',
        stydentCoin: 1038,
        stydentEnergy: 2030
    }
];

sentBtn.addEventListener('click', () => {
    const userId = Number(inputName.value.trim());
    const userPassword = Number(inputPassword.value.trim());

    const foundStudent = accauntStydent.find(student =>
        student.stydentId === userId && student.stydentPassword === userPassword
    );

    if (foundStudent) {
        alert('Xush kelibsiz, ' + foundStudent.stydentName);
        localStorage.setItem('student', JSON.stringify(foundStudent));
        window.location.href = 'Home.html';
    } else {
        alert('ID yoki parol noto‘g‘ri!');
    }
});
