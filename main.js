function addFun() {
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    if ((a == undefined && b == undefined) || (a == null && b == null) || (a == '' || b == '')) {
        document.getElementById('ans').innerHTML = "Please enter the values in required fields";
    } else {
        document.getElementById('ans').innerHTML = "Ans is :" + (parseInt(a) + parseInt(b));
    }
}