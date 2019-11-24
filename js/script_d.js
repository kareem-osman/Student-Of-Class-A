let arr_d=JSON.parse(localStorage.getItem("student_d"))
let id_ver=Number((location.href.split("id="))[1])
console.log(id_ver)
for(let std of arr_d){
    if(std.id === id_ver){
        let cont_d=`<div class="datails-item">
        <h2>Id :</h2>
        <h3>${std.id}</h3>
        <h2>Name :</h2>
        <h3>${std.name}</h3>
        <h2>Age :</h2>
        <h3>${std.age} Years Ago</h3>
        <a href="index.html" class="a-btn"><button class="btn">Back</button></a>
        </div>
        <div class="img-box">
        <img src="imges/${std.img}" alt="">
        </div>
        `
        console.log(cont_d)

        document.getElementById("cont_dt").innerHTML=cont_d
        break
    }
}

