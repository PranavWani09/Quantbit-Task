const colorList = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F6"];
let count = 0;

document.getElementById("bgChanger").addEventListener("click", function () {
    document.body.style.backgroundColor = colorList[count];
    count = (count + 1) % colorList.length;
});
