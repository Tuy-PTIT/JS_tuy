
var nhietDo=Math.floor(Math.random()*45);
var doAm=Math.floor(Math.random()*101);
var anhSang=Math.floor(Math.random()*201);

document.getElementById("ND2").innerHTML=nhietDo;
document.getElementById("DA2").innerHTML=doAm;
document.getElementById("AS2").innerHTML=anhSang;
function KTnhietdo(nhietDo){
if(nhietDo < 22) {
    document.getElementById("ND").style.background="#ccffff"
    alert("Nhiệt độ khá lạnh.")
    }else if(nhietDo>=22 && nhietDo<=32){
        document.getElementById("ND").style.background="#80ff80"
        alert("Nhiệt độ thoáng mát.")
    }else if(nhietDo>32 ){
        document.getElementById("ND").style.background="#ffaa00"
        alert("Nhiệt độ khá nóng.")
    }
}
function KTdoam(doAm){
    if(doAm < 65) {
        document.getElementById("DA").style.background="#ffd480"
        alert("Độ ẩm ở mức thấp.")
        }else if(doAm>=65 && doAm<=86){
            document.getElementById("DA").style.background="#33ff99"
            alert("Độ ẩm ở mức thích hợp.")
        }else if(doAm>86 ){
            document.getElementById("DA").style.background="#99ccff"            
            alert("Độ ẩm ở mức cao.")
        } 
}
function KTanhsang(anhSang){
    if(anhSang < 100) {
        document.getElementById("AS").style.background="#008080"
        alert("Thiếu ánh sáng.")
        }else if(anhSang>=100 && anhSang<=160){
            document.getElementById("AS").style.background="#ffffb3"
            alert("Ánh sáng ở mức vừa phải.")
        }else if(anhSang>150 ){
            document.getElementById("AS").style.background="#80ccff"           
            // alert("Ánh sáng quá cao")
        } 
}
function btn1on()
{
document.getElementById("nutnhan").style.background = "#00FF00"
}

function btn1off()
{
document.getElementById("nutnhan").style.background = "#808080"
}

function btn2on()
{
document.getElementById("nutnhan2").style.background = "#00FF00"
}

function btn2off()
{
document.getElementById("nutnhan2").style.background = "#808080"
}

KTnhietdo(nhietDo);
KTdoam(doAm);
KTanhsang(anhSang);