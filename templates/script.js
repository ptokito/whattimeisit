function updateTime() {
    var mumbaiTime = document.getElementById("mumbai-time");
    var nyTime = document.getElementById("ny-time");
    var tokyoTime = document.getElementById("tokyo-time");

    var currentTime = new Date();
    var indiaOffset = 5.5 * 60 * 60 * 1000;
    var nyOffset = -4 * 60 * 60 * 1000;
    var tokyoOffset = 9 * 60 * 60 * 1000;
    var indiaTime = new Date(currentTime.getTime() + indiaOffset);
    var nyTime = new Date(currentTime.getTime() + nyOffset);
    var tokyoTime = new Date(currentTime.getTime() + tokyoOffset);

    mumbaiTime.innerHTML = indiaTime.toISOString().slice(0, 19).replace('T', ' ');
    nyTime.innerHTML = nyTime.toISOString().slice(0, 19).replace('T', ' ');
    tokyoTime.innerHTML = tokyoTime.toISOString().slice(0, 19).replace('T', ' ');
}

updateTime();
setInterval(updateTime, 1000);

