console.log('Your file is loaded properly');

let nav2 = document.querySelector('#nav2');
let skillBox = document.querySelector('#skillBox');
let selectorLine = document.querySelector('.selectorLine');

nav2.addEventListener('click' , scrollSkills , false);
function scrollSkills(e)
{
    skillBox.scrollIntoView({ behavior: 'smooth' });
}

$(nav2).click(function(){
    $(selectorLine).animate( {left: '994px'}, 1000 );
});