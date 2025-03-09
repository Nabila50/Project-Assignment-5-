const taskAssigned = document.getElementById('task').innerText;
const convertedTask = parsin(taskAssigned);
let min = 1; 
if(min === 1){
    const subs = convertedTask - count;
    min--;
    document.getElementById('task').innerText = subs;
}
else{
    console.log('wrong');
}