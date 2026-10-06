//get number of qsn and subject through url
const params = new URLSearchParams(window.location.search);
const [num_of_qsn, subject] = Array.from(params.values())

const h1 = document.querySelector("h1")
h1.textContent = `${subject.toUpperCase()} Quiz`
const quizset = document.querySelector(".quizset")
const body = document.querySelector("body")
const button = document.querySelector("button")
//------------------------------------------------------------------

const randomiser = function (totalarr) {
  let arr = null;
  for (let i = totalarr.length - 1; i > 0; i--) {
    const num = Math.floor(Math.random() * (i + 1));
    [totalarr[i], totalarr[num]] = [totalarr[num], totalarr[i]];
  }
  arr = totalarr.slice(0, num_of_qsn)
  return arr;
}

async function main() {
  const response = await fetch("data.json");
  const data = await response.json();
  const subjectarr = data[subject]
  const newarr = randomiser(subjectarr);
  //-----------------------------------------------------

  newarr.forEach((elem, i) => {
    //console.log(quizset)
    quizset.innerHTML += `<div class="box">
                            <h3> ${"Question " + (i + 1)} </h3>
                            <p> ${elem.qsn} </p>
                            <div class="optbox"> </div>
                          </div>`

    let box = quizset.lastElementChild
    let optbox = box.querySelector(".optbox")
    const opt = elem.options;
    for (let x in opt) {
      optbox.innerHTML += `<input type="radio" id=${i + x} name=${i} value=${x}>
                            <label for=${i + x}></label>
                            <br/>`
      let labels = optbox.querySelectorAll("label")
      let label = labels[labels.length - 1]
      label.textContent = opt[x];
    }

    if (i !== newarr.length - 1) {
      box.innerHTML += `<br /> <hr style="margin-right: 30px;">`
    }
  });
  // ==================================================== generating answers ====================================================

  button.addEventListener("click", function () {
    let ans = [];
    let completed = true;
    for (let i = 0; i < newarr.length; i++) {
      const selected = document.querySelector(`input[name="${i}"]:checked`);
      if (selected === null) {
        completed = false;
        break;
      }
      else { ans.push(
        { Question: i + 1, 
          Answer: selected.value === newarr[i].ans ? "True" : "False", 
          Submitted_Answer: selected.value, 
          Correct_Answer: newarr[i].ans 
        }); 
      }
    }

    const ans_json = JSON.stringify(ans);
    localStorage.setItem(`${subject}_answers`, ans_json);
    if (completed === true) { window.location.href = `./answer_page.html?topic=${subject}` }
    else alert("Please complete all the questions !!!")
  });
}


main(); 