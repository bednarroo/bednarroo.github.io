const roshambo = document.querySelector('.roshambo');
const oneArmed = document.querySelector('.oneArmed');
const toDo = document.querySelector('.toDo');
const description = document.querySelector('.descritpion')


const goTo = function (){
    window.open('https://github.com/bednarroo/toDoList','mywindow')
}

const goTo1 = function (){
    window.open('https://github.com/bednarroo/one-armed-bandit','mywindow')
}

const goTo2 = function (){
    window.open('https://github.com/bednarroo/RockPaperScissors','mywindow')
}

toDo.addEventListener("click", goTo)
oneArmed.addEventListener("click", goTo1)
roshambo.addEventListener("click", goTo2)

const typingDescription = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quia culpa non, aliquam nisi quam odit exercitationem vel illum. Minima incidunt quaerat dignissimos. Velit, maiores odio est repudiandae, explicabo labore tempora, optio molestias quam aliquid harum ab iure debitis. Vitae blanditiis iste minus provident sequi, aliquid inventore iure eligendi volupta']
let i = 0


const typingChaning = function(){

    description.innerHTML += typingDescription[0][i]
    i++
    if(i === typingDescription[0].length-1){
        clearInterval(interval);

    }


}

const interval = setInterval(typingChaning,30)

typingChaning()