
document.addEventListener('DOMContentLoaded', function() {
    let containerDivs = document.querySelectorAll('.container-img div');

    containerDivs.forEach(function(div) {
        div.addEventListener('click', function() {
            if (div.classList.contains('spin')) {
                div.classList.remove('spin');
            } else {
                containerDivs.forEach(function(innerDiv) {
                    innerDiv.classList.remove('spin');
                });
                div.classList.add('spin');
            }
        });
    });
});

