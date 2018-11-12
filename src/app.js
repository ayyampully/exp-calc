(function() {
  console.log("start");
  let expCounter = 1;
  let inputs = document.querySelector(".input-to");
  inputs.addEventListener("change", caluclateExp);
  function caluclateExp() {
    let dateTo = new Date(this.value);
    const id = this.getAttribute("data-id");
    if (dateTo != "Invalid Date") {
      let dateFrom = document.getElementById(`inputFrom${id}`);
      let dateFromObj = new Date(dateFrom.value);
      if (dateFromObj != "Invalid Date") {
        const expMillis = dateTo.getTime() - dateFromObj.getTime();
        const exp = Math.round(expMillis / (1000 * 60 * 60 * 24 * 30));
        console.log(exp);
        let expSpan = document.getElementById(`exp${id}`);
        expSpan.textContent = `${exp} months`;

        const totalExpSpan = document.querySelector(".total-exp");
        let totalExp = parseInt(totalExpSpan.textContent);
        totalExpSpan.textContent = totalExp + exp;
      }
    }
  }

  let addButtons = document.querySelector(".button-add");
  addButtons.addEventListener("click", addNewRow);
  function addNewRow(e) {
    e.preventDefault();
    const form = this.parentNode.parentNode;
    const template = getTemplate();
    form.appendChild(template);
  }

  function getTemplate() {
    expCounter++;
    let parentDiv = document.createElement("div");
    parentDiv.className = "form-row";

    let grp1 = document.createElement("div");
    grp1.className = "form-group col-md-5";
    let input1 = document.createElement("input");
    input1.type = "date";
    input1.className = "form-control";
    input1.id = "inputFrom" + expCounter;
    grp1.appendChild(input1);

    let grp2 = document.createElement("div");
    grp2.className = "form-group col-md-5";
    let input2 = document.createElement("input");
    input2.type = "date";
    input2.className = "form-control input-to";
    input2.setAttribute("data-id", expCounter);
    input2.addEventListener("change", caluclateExp);
    grp2.appendChild(input2);

    let grp3 = document.createElement("div");
    grp3.className = "form-group col-md-1";
    let span = document.createElement("span");
    span.id = "exp" + expCounter;
    span.textContent = "0";
    grp3.appendChild(span);
    let button = document.createElement("button");
    button.className = "button-add";
    button.textContent = "+";
    button.addEventListener("click", addNewRow);

    parentDiv.appendChild(grp1);
    parentDiv.appendChild(grp2);
    parentDiv.appendChild(grp3);
    parentDiv.appendChild(button);
    return parentDiv;
  }
})();
