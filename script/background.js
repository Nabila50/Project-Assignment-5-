document.getElementById('back').addEventListener('click', function(){
    const color = ['skyblue', 'lemon', 'yellow', 'tomato', 'orange'];
    const randomColor = color[Math.floor(Math.random()*color.length)];
    document.body.style.background = randomColor;
 

})