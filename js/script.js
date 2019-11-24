// var mlist=["january","february","march","april","may","june","july","august",
// "september","october","november","december"]
// function radomMonth(mlist){
//     return mlist[Math.floor(Math.random()*mlist.length)]
// }


function Mbstud(_id,_name,_img,_age){
    this.id=_id;
    this.name=_name;
    this.img=_img;
    this.age=_age;
}

let student=new Array
student.push(new Mbstud(20,"Abd-Alrhman kareem mohamed","p (1).jpg",11))
student.push(new Mbstud(118,"Doaa aly saed","p (2).jpg",20))
student.push(new Mbstud(155,"Yousf kareem mohamed","p (3).jpg",9))
student.push(new Mbstud(231,"aly kasom ahmed","p (4).jpg",50))
student.push(new Mbstud(250,"Esam mustafa foid","p (5).jpg",62))
student.push(new Mbstud(326,"Mervet ahmed aly","p (6).jpg",71))
student.push(new Mbstud(402,"Madeha hassn aly","p (8).jpg",35))
function main_load(){
    let conhtml=""
for(let std of student){
    conhtml +=`<div class="img-box">
    <img src="imges/${std.img}" alt="">
    <div class="id-box">
    <p>${std.id}</p>
    </div>
    <div class="bottom">
    <a href="details.html?id=${std.id}" id="a-btn"><button id="btn-i">Details</button></a>
    <h2>${std.name.split(" ")[0]}</h2>
    </div>
    </div>
    `
}
document.getElementById("main-content").innerHTML=conhtml

}
main_load()
function res_random(){
    let indst = Math.floor(Math.random()*student.length)
    res_html=`<div class="img-box">
    <img src="imges/${student[indst].img}" alt="">
    <div class="id-box">
    <p>${student[indst].id}</p>
    </div>
    <div class="bottom">
    <a href="details.html?id=${student[indst].id}" id="a-btn"><button id="btn-i">Details</button></a>
    <h2>${student[indst].name.split(" ")[0]}</h2>
    </div>
    </div>`
    document.getElementById("result").innerHTML=res_html
}

// 5555555555555555555555555555555555555555555555555555555555555555555555555555
function add_std(){
    let newstd=prompt("Id & , & Name & , & Age","20,mahamed,p (8).jpg,20","")
    let new_st= newstd.split(",")
    console.log(new_st)
    student.push(new Mbstud(...new_st))
    main_load()
    // student.push(new Mbstud(new_st))
    }
// 999999999999988888888888888888888899999999999999
    localStorage.setItem("student_d",JSON.stringify(student))