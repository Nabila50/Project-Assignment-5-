const btnsAll = document.getElementsByClassName("complete-btn");
for (const btn of btnsAll) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    btn.disabled = true;

    const headerNumber = document.getElementById("header-number").innerText;
    const convertedHeaderNumber = parseInt(headerNumber);

    const title1 = document.getElementById("title").innerText;

    const taskAssigned = document.getElementById("task").innerText;
    const convertedTask = parseInt(taskAssigned);
    

    let count = 1;

    if (count === 1) {
      const sum = convertedHeaderNumber + count;
      count++;
      document.getElementById("header-number").innerText = sum;

      // -------------Active Log-------------------
      const container = document.getElementById("history-container");
      const p = document.createElement("p");
      p.innerText = `
            
            you have completed the task ${title1} at 12:20pm.
            `;
      container.appendChild(p);
   
    } 
    else {
      console.log("not working");
    }

    // ---------------Task decrease---------------
    
    let min = 1
    if (min > 0) {
        const sub = convertedTask -min;
        min -=1;
        document.getElementById("task").innerText =sub;
    } 
    else {
        console.log("wrong");
    }


    
  });

  let clickCount = 0;
  let lastBtn = document
    .getElementById("final")
    .addEventListener("click", () => {
      clickCount++;
      if (clickCount === 1) {
        alert("Board Updated Successfully");

        const container = document.getElementById("history-container");
        const p = document.createElement("p");
        p.innerText = `
                you have completed the task ${title1} at 12:20pm.
                `;
        container.appendChild(p);
      } else if (clickCount === 2) {
        alert("Congrats! you have completed all the current task");
        final.disabled = true;
      }
    });
}
