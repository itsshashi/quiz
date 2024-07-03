const questions=[{
    question:"In which country was the world's deepest blue hole, named Taam Ja' Blue Hole, discovered?",
    answers: [{text:"Mexico",correct:true}, 
            {text:"Belize", correct:false},
            {text:"Jamaica", correct:false},
            {text:"Bahamas",correct:false},
                ]
},
{
    question:"In the ISL 2023-24 season, Mumbai City FC clinched the ISL Cup by defeating which club?",
    answers: [{text:'kerala Blaster Fc',correct:false}
        ,{text:'ATK Mohun Bagan',correct:false},
        {text:'Bengaluru FC',correct:false},
        {text:'Mohun Bagun Super Giant',correct:true},
    ]
},
{
    question:"Where are the rocks that provided the oldest evidence of Earth's magnetic field collected?",
    answers:[{text:'Antarctica',correct:false},
        {text:'The Sahara Dessert',correct:false
        },
        {text:'The Andes Mountains',correct:false},
        {text:'Greenland',correct:true
        }

    ]
},
{
    question:"Delegates from how many countries have participated in the Election Visitors’ Program during the ongoing Lok Sabha Elections 2024?",
    answers:[{
        text:20,correct:false
    },
{
    text:21,correct:false
},
{
    text:22,correct:false
},
{
    text:23,correct:true
}]
},
{
    question:"Who has been appointed as the Deputy Secretary in the Ministry of Tourism in May 2024?",
    answers:[{text:'Subham Choudhary',correct:false},
        {text:'Anubhav Singh',correct:false
        },
        {text:'Lalithambigai K',correct:true},
        {text:'Rajesh Kumar',correct:false
        }

    ]
},
{
    question:"In which city was the 2nd Session of the India-Nigeria Joint Trade Committee held?"
,
    answers:[{text:'Lagos',correct:false},
        {text:'Abuja',correct:true
        },
        {text:'Mumbai',correct:false},
        {text:'New Delhi',correct:false
        }

    ]
},
{
    question:"Who is set to receive the honorary Palme d'Or at the Cannes Film Festival's opening ceremony on May 14?",
    answers:[{text:'Nicolr Kidman',correct:false},
        {text:'Meryl Streep',correct:true
        },
        {text:'Cate Blanchett',correct:false},
        {text:'Helen Mirren',correct:false
        }

    ]
},



]
const question_element=document.getElementById('question');
const answer_button=document.querySelector('.answerf');
const next_button=document.querySelector('.next');
let score=0;
let current_question_index=0;
function quiz(){
    score=0;
    current_question_index=0;
    next_button.innerHTML="Next"
    startQuestion();
}
function startQuestion(){
    reset();
    let current_question=questions[current_question_index];
    let questionNo=current_question_index+1;
    question_element.innerHTML=questionNo +". "+ current_question.question;

    current_question.answers.forEach(answer=>{
        const buttons =document.createElement("button");
        buttons.innerHTML=answer.text;
        buttons.classList.add('btn');
        answer_button.appendChild(buttons);
        if (answer.correct){
            buttons.dataset.correct=answer.correct
        }  
        buttons.addEventListener('click',select_Answer);

                
        
    });
};
function reset(){
    next_button.style.display='none';
    while(answer_button.firstChild){
        answer_button.removeChild(answer_button.firstChild);
}
}
function select_Answer(e){
    const selected_answer=e.target;
    const iscorrect= selected_answer.dataset.correct==="true";
    if(iscorrect){
        selected_answer.classList.add('correct')
        score++;
    }
    else{
        selected_answer.classList.add('wrong')
    }
    Array.from(answer_button.children).forEach(button=>{
        if(button.dataset.correct==='true')
            {
                button.classList.add('correct');

            }
            button.disabled =true;

    }
    );
    next_button.style.display='inline-block';
}

next_button.addEventListener('click',()=>{
    if(current_question_index<questions.length){
        next_question();
    
    }
    else{
        quiz();
        }
});
function show_score(){
    reset();
    question_element.innerHTML=`You scored ${score} out of ${questions.length}`;
    next_button.innerHTML='play again';
    next_button.style.display='inline-block';

}
function next_question(){
    current_question_index++;
    if(current_question_index<questions.length){
        startQuestion();
    }
    else{
        show_score();
    }
}


quiz();
