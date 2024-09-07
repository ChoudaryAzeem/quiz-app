const questions = [{
    'que': 'Which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'Python',
    'correct': 'a'
},
{
    'que': 'Which year was javascript launched?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'none of the above',
    'correct': 'b'
},
{
    'que': 'What does CSS Stand For',
    'a': 'Cascading Style Sheets',
    'b': 'Jason object Natation ',
    'c': 'Coding Style Sheet',
    'd': 'Hypertext markup language',
    'correct': 'a'
},
{
    'que': 'What does JS Stand For',
    'a': 'Cascading Style Sheets',
    'b': 'JavaScript ',
    'c': 'Coding Style Sheet',
    'd': 'Hypertext markup language',
    'correct': 'b'
},
{
    'que': 'What does Css Stand For',
    'a': 'Cascading Style Sheets',
    'b': 'Jason object Natation ',
    'c': 'Coding Style Sheet',
    'd': 'Hypertext markup language',
    'correct': 'a'
}
]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesbox = document.getElementById("quesbox")
const optionInputs = document.querySelectorAll(".options")
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset();
    const data = questions[index];
    // console.log(data)
    quesbox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    optionInputs[4].nextElementSibling.innerText = data.e;
    optionInputs[5].nextElementSibling.innerText = data.f;


}
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}


const getAnswer = () => {
    let answer ;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer ;
}

    const reset = () => {
        optionInputs.forEach(
            (input) => {
                input.checked = false
            }
        )
    }
    const endQuiz = () => {
        document.getElementById("box").innerHTML = `
        <div style = "text-align: center">
            <h3> Thank You For Playing </h3>
            <h2> ${right} / ${total} are correct</h2>
            </div>
            `
    }

    loadQuestion();