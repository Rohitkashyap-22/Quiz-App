# Quiz App

A simple **JavaScript Quiz Application** built using HTML, CSS, and JavaScript. The application allows users to select a quiz topic, choose the number of questions, attempt randomly selected questions, and view their submitted and correct answers.

## Features

* Three quiz topics:

  * HTML
  * CSS
  * JavaScript
* User can select the number of questions.
* Questions are randomly selected from the available questions.
* Multiple-choice questions with four options.
* Only one option can be selected for each question.
* Prevents submission until all questions are answered.
* Calculates whether each submitted answer is correct.
* Stores quiz answers in `localStorage`.
* Displays:

  * Questions
  * Correct Answers
  * Submitted Answers
  * Whether the submitted answer was correct

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Fetch API
* JSON
* URLSearchParams
* LocalStorage
* DOM Manipulation

## How It Works

### 1. Select a Quiz

The user first selects a topic and enters the required number of questions.

```text
HTML Quiz Set
CSS Quiz Set
JavaScript Quiz Set
```

The selected topic and number of questions are passed to the quiz page through URL parameters.

Example:

```text
quiz.html?num=5&subj=JS
```

### 2. Load Questions

The quiz page fetches questions from `data.json` using the Fetch API.

```javascript
const response = await fetch("data.json");
const data = await response.json();
```

Questions belonging to the selected topic are then used to generate the quiz.

### 3. Random Question Selection

The application uses a randomization function to shuffle the questions and select the requested number of questions.

```javascript
const newarr = randomiser(subjectarr);
```

This means the user can get a different set of questions from the same topic.

### 4. Attempt the Quiz

Each question contains four radio-button options. The user must select one option for every question.

If any question is unanswered, the application displays:

```text
Please complete all the questions !!!
```

### 5. Check Answers

When the user submits the quiz, the selected answer is compared with the correct answer stored in `data.json`.

The application stores information such as:

```javascript
{
    Question: 1,
    Answer: "True",
    Submitted_Answer: "a",
    Correct_Answer: "a"
}
```

### 6. Store Results

The quiz results are converted to JSON and stored in `localStorage`.

The storage key is generated according to the selected topic:

```text
HTML_answers
CSS_answers
JS_answers
```

### 7. Answer Sheet

After submission, the user is redirected to the answer sheet.

The answer sheet displays:

| Questions  | Answers | Correct Answers | Submitted Answers |
| ---------- | ------- | --------------- | ----------------- |
| Question 1 | True    | a               | a                 |
| Question 2 | False   | b               | c                 |

The topic is retrieved from the URL using `URLSearchParams`, and the corresponding results are retrieved from `localStorage`.

## Project Flow

```text
Select Topic
     ↓
Select Number of Questions
     ↓
Quiz Page
     ↓
Fetch questions from data.json
     ↓
Randomly select questions
     ↓
Attempt Quiz
     ↓
Submit Answers
     ↓
Compare Submitted & Correct Answers
     ↓
Store Results in localStorage
     ↓
Answer Sheet
```

## Project Structure

```text
Quiz-App/
│
├── index.html
├── quiz.html
├── answer_page.html
│
├── redirector.js
├── script.js
├── answers.js
│
├── data.json
├── style.css
│
└── README.md
```

## Running the Project

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Open the project in VS Code.

3. Run the project using a local server such as **Live Server**.

4. Open the quiz application in your browser.

## Future Improvements

* Add a final score display.
* Add a timer for the quiz.
* Add more quiz topics.
* Add different difficulty levels.
* Improve the UI and responsiveness.
* Add a restart/retry quiz option.
* Add question navigation.
* Store previous quiz attempts and scores.

## Author

**Rohit Kashyap**
