let img = document.querySelectorAll("img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let count = 0;

next.addEventListener("click", function () {
    count++;
    console.log(count)
    img.forEach(im => {
        if (count < img.length) {
            im.style.transform = `translateX(-${count * 100}%)`
        } else {
            count = 0;
            im.style.transform = `translateX(-${count * 100}%)`
        }
    });
});

prev.addEventListener("click", function () {
    count--;
    img.forEach(im => {
        if (count < 0) {
            count = img.length-1;
            im.style.transform = `translateX(-${count * 100}%)`
        } else {
            im.style.transform = `translateX(-${count * 100}%)`
        }
    });
});

