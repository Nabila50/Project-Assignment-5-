const historyBtn = document.getElementById('history-btn');
const historyContainer = document.getElementById('history-container');

 

historyBtn.addEventListener('click', function(){
    historyContainer.innerText = ''; 
    historyBtn.disabled = true;

})

