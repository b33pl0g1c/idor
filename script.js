
if(!document.cookie.includes("user=")){

    document.cookie=`app_info=note taking app`;
    document.cookie=`user=${btoa("userid:1")}`;
}

function replacer(arr){
    let html=``
    document.querySelector("#img").src=`img\\${arr[0]}`;
    document.querySelector("#name").textContent=`${arr[1]}`;
    for(i in arr[2]){
        html+=`<li class="text-white text-xl">${arr[2][i]}</li> \n`;
    }
    document.querySelector("#list").innerHTML=html;

}
beluga=["beluga.jpg","Beluga",["I love Fish","Follow me on instagram ","Meow !"]]
mr_hacker=["hacker.jpg","Mr Hacker",["Is RSA encryption secure?","Connect to reverse shell","Hack beluga id and read his notes"]]
admin=["admin.jpg","Admin",["Password:INNO{1D0R_1S_S3XY}","Merry Christmas","Buy Fish from market"]]
unknown=["black.jpg","no user found",["","",""]]

let cookie_value=atob(document.cookie.split(";")[1].replace("user=",""));

if(cookie_value=="userid:1"){
    replacer(beluga);
}
else if(cookie_value=="userid:2"){
    replacer(mr_hacker);
}
else if(cookie_value=="userid:5"){
    replacer(admin);
}
else{
    replacer(unknown)
}
