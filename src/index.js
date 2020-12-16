const questionURL = "http://localhost:3000/questions"
const questionDiv = document.getElementById("question-container")


fetchQuesions()
function fetchQuesions(){
fetch(questionURL)
.then(response => response.json())
.then(questions => 
  questions.data.forEach(question => {

    
        const questionMarkup = `
        <div data-id=${question.id}>
        
        <p id="code-question"> ${question.attributes.codeQuestion}</p
        <ul id="option-answers">
        <li id="optionA">${question.attributes.optionA}</li>
        <li id="optionB">${question.attributes.optionB}</li>
        <li id="optionC">${question.attributes.optionC}</li>
        <li id="optionD">${question.attributes.optionD}</li>
        <ul>
        <h2 id="correct-answer">${question.attributes.correctAnswer}</h2>
        <p id="explanation"> ${question.attributes.explanation}</p
        <div>
        <br><br>
        `
    questionDiv.innerHTML += questionMarkup

    })
)}

