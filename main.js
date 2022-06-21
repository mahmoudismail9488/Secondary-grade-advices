let name = prompt("ادخل الاسم بالعربية");
if (name == null || name == ""){
    alert(" يجب ادخال الاسم..اعد المحاولة ")
    document.querySelector("body").innerHTML = ""
}
let newName = "";
for(i = 0;i<name.length;i++){
    if (name[i] != " "){
        newName += name[i]
        
    }
}
if (newName == "روان"){
    let special = ["إزازة الماية اهم من القلم في الامتحان" ,"الثانوية العامة مش نهاية الدنيا ", "ابتسمي انتي علي وشك الانتهاء من السنة الاصعب ","لو ربنا موفقكيش في امتحان متقصريش في الباقي",
"حافظي علي صلاة الفجر و قراءة سورة يس","الدعاء يغير الاقدر ","تذكري انكي اهم من المجموع", "انتي هتفضلي روان حبيبتنا بأي مجموع","مستنيكي و انتي ناجحة ومحققة هدفك",
"بدعيلك في كل صلاة وفي كل وقت ياسفيرتي"]
document.getElementById("nav").innerHTML = "مرحبا ايتها السفيرة <br>   &#128514;&#128514;اعرب السفيرة"
let btn = document.getElementById("btn"),
    text = document.getElementById("text");
btn.onclick = function(){
    i = Math.floor(Math.random()*special.length)
    modal.style.display = "block"
    text.textContent = special[i]
    btn.style.display = "none"

}
let close = document.querySelector("#close"),
    modal = document.getElementById("modal");
close.onclick = function(){
    modal.style.display= "none"
    btn.style.display = "block"
}

}else{
    let sentences = ["إزازة الماية اهم من القلم في الامتحان" ,"الثانوية العامة مش نهاية الدنيا ", "ابتسم انت علي وشك الانتهاء من السنة الاصعب ","لو ربنا موفقكش في امتحان متقصرش في الباقي",
"حافظ علي صلاة الفجر و قراءة سورة يس","الدعاء يغير الاقدر ","تذكر انك اهم من المجموع"]
      
let btn = document.getElementById("btn"),
    text = document.getElementById("text");
btn.onclick = function(){
    i = Math.floor(Math.random()*7)
    modal.style.display = "block"
    text.textContent = sentences[i]
    btn.style.display = "none"

}
let close = document.querySelector("#close"),
    modal = document.getElementById("modal");
close.onclick = function(){
    modal.style.display= "none"
    btn.style.display = "block"
}

}




