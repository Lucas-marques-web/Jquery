
// the jquery and the dollar sign works the same as document.querySelector()
jQuery('h1').css('color', 'red');
//$('h1').css('font-size','4rem');


// keep the css to the styling html to the structure and the js for the functionality
// adding two class of css to all buttons 
$('button').addClass('big-button test');

// removing the class
jQuery('button').removeClass('big-button');

//verifying  if has the class
console.log($('button').hasClass('test'));


// changing the text 
$('h1').text('hello,my world');

// changing the html tag to paragraph
$('h1').html('<p> bla bla bla</p>');


// get the src atribute of img element
console.log($('img').attr('src'));

// Set the href atribute of element which was # 
$('a').attr('href', 'https://www.google.com.br/')

// adding event listener on the button and changing the p tag
$('button').click(function () {
    $('p').toggleClass('button-click');
})

//adding keyboard event listener on imput html 
$('input').keypress(function (event) {
    console.log(event)
    $('p').text('letter : ' + event.key)
})

// another way of add event listener
$('h3').on('click', function () {
    jQuery('h3').css('background-color', 'red');
    alert("clicked on the h3")

})

// 