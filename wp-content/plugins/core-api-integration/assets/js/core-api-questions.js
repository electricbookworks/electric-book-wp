const buttons = document.querySelectorAll("button.core-api-question-download");

buttons.forEach(function(button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        button.classList.toggle("active");
        format_div = button.parentNode.querySelector("div.core-api-question-download-formats");
        if (format_div) {
            format_div.classList.toggle("active");
        }
    }, false);
});


document.addEventListener('click', function(event) {
    const active_buttons = document.querySelectorAll("button.core-api-question-download.active");
    active_buttons.forEach(function(button) {
        if (!button.contains(event.target)) {
            button.classList.remove("active");
            format_div = button.parentNode.querySelector("div.core-api-question-download-formats.active");
            if (format_div) {
                format_div.classList.remove("active");
            }
        }
    });
});
