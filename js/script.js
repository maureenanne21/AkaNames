function validate(){

    var date = document.getElementById("date");
    var gender = document.akannames.gender;
    var date = new Date(document.getElementById("date").value);
    var dateday = date.getDay();
    var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var day = weekdays[dateday];
    var mName =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var fName = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var valid = false; 
    var dateerror = document.getElementById('dateerror');
    var gendererror = document.getElementById('gendererror');
    var result = document.getElementById('result');
    if(document.getElementById("date").value == ""){
        dateerror.innerHTML = "Please enter a valid date ";
        return false;
    }else{