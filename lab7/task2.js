function switchText(){
    var obj1 = document.getElementById("left");
    var obj2 = document.getElementById("right");

    var temp = obj1.value;
    obj1.value = obj2.value;
    obj2.value = temp;
}