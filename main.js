student_name=[];

function submit(){
    var display_name=[];
    for(var i=1;i<=4;i++){
        var names=document.getElementById("name_of_the_student_"+i ).value;
        student_name.push(names);
        console.log(names);

    }
    console.log(student_name);
    var student_name_length= student_name.length;
    console.log(student_name_length);

    for(g=0;g<student_name_length;g++){
        display_name.push("<h4>name-"+student_name[g]+"</h4>");
        console.log(display_name);

    }
    console.log(display_name);
    document.getElementById("display_name_with_commas").innerHTML=display_name;

    var without_commas= display_name.join("");
    console.log(without_commas);
    document.getElementById("display_name_without_commas").innerHTML=without_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";



}
function sorting(){
student_name.sort();
console.log(student_name);
var Name_2=[];
var student_name_length= student_name.length;
    console.log(student_name_length);
    for(g=0;g<student_name_length;g++){
        Name_2.push("<h4>name-"+student_name[g]+"</h4>");
        console.log(Name_2);

    }
    var without_commas= Name_2.join("");
    console.log(without_commas);
    document.getElementById("display_name_without_commas").innerHTML=without_commas;



}
function Update(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+student_name+"</h1>";
}
