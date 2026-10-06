// ------------------------------fetching answers from respecetive set.js----------------------------

const params = new URLSearchParams(window.location.search);
const topic = params.get("topic");
const ans_json = localStorage.getItem(`${topic}_answers`);
const answer_key = JSON.parse(ans_json);

let z = document.querySelector(".z");
const body = document.querySelector("body")
const input = document.querySelectorAll("input")
const h2 = document.querySelector("h2")
h2.textContent = `Answersheet - ${topic} Quiz `

const showanswer = function () {
  let table = document.querySelector("table")
  answer_key.forEach((elem) => {
    table.innerHTML += `<tr>
                          <td>${elem.Question}</td>
                          <td>${elem.Answer}</td>
                          <td>${elem.Correct_Answer}</td>
                          <td>${elem.Submitted_Answer}</td>
                        </tr>`
  });
}

showanswer();

