


setInterval(() => {
    date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    hh = document.querySelector(".hour-hand");
    mh = document.querySelector(".minute-hand");
    sh = document.querySelector(".second-hand");

    hh_rot = (30 * hour) + 90;
    mh_rot = (6 * min) + 90;
    sh_rot = (6 * sec) + 90;

    sh.style.transform = `rotate(${sh_rot}deg)`;
    mh.style.transform = `rotate(${mh_rot}deg)`;
    hh.style.transform = `rotate(${hh_rot}deg)`;
}, 1000);
