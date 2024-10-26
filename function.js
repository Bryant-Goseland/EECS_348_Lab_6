function validate() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;


    if (password1.length < 8) {
        alert("The length of the first password does not reach 8 characters!")
    } else if (password2.length < 8) {
        alert("The length of the second password does not reach 8 characters!")
    } else if (password1 != password2) {
        alert("Your passwords don't match!")
    } else {
        alert("Good job!")
    }
}

function alert_paragraph_color() {
    var border_R = document.getElementById("border_R").value;
    var border_G = document.getElementById("border_G").value;
    var border_B = document.getElementById("border_B").value;
    var border_width = document.getElementById("border_width").value;
    var bg_R = document.getElementById("background_R").value;
    var bg_G = document.getElementById("background_G").value;
    var bg_B = document.getElementById("background_B").value;

    var tag = document.getElementById("paragraph");
    tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    tag.style.borderWidth = border_width
    tag.style.backgroundColor = `rgb(${bg_R},${bg_G},${bg_B})`;
}
