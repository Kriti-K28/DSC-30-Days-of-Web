//Instead of using this process I used attribute method so I had not call validation function in form tag 

function  validation()
{
  var username =  document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var number = document.getElementById('number').value;
  
  var usercheck = /^[A-Za-z. ]{3,30}$/ ;
  var emailcheck = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  var mobileCheck = /^[6-9][0-9]{9}$/;
    if(usercheck.test(username))
    {
        document.getElementById('usererror').innerHTML = " ";
    }
    else
    {
        document.getElementById('usererror').innerHTML = "*Please enter your name";
        return false;
    }
    if(emailcheck.test(email))
    {
        document.getElementById('emailerror').innerHTML = " ";
    }
    else
    {
        document.getElementById('emailerror').innerHTML = "*Please enter valid email ";
        return false;
    }
    if(mobilecheck.test(number))
    {
        document.getElementById('Contacterror').innerHTML = " ";
    }
    else
    {
        document.getElementById('Contacterror').innerHTML = "*Please enter valid number ";
        return false;
    }
 
}




$(window).scroll(function () {
if ($(window).scrollTop() >= 70) {
$('.navbar').css('background','#53555a');
} else {
$('.navbar').css('background','black');
}
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
    $('#blog').css('background','#53555a');
    } else {
    $('#blog').css('background','black');
    }
    });

AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    // delay: 100,
    // duration: 1200,
 });
   