document.addEventListener('DOMContentLoaded', function () {
    var email = document.getElementById('email');
    var email2 = document.getElementById('email2');
    var submit = document.getElementById('submit');

    function emailValidation() {
        submit.onclick = function () {
            if (email.value !== email2.value) {
                email2.setCustomValidity('Email addresses have to match.');

                alert('Email addresses are not the same. Please try again.');
            } else {
                email2.setCustomValidity('');

                alert('We will reach out to you shortly.');


            }
        }
    }

    email.addEventListener('change', emailValidation);
    email2.addEventListener('change', emailValidation);
});