
let loader = document.getElementById("pre-loader");
window.addEventListener("load",function(){
loader.style.display = "none";
})


// resume section javascript





function updateResume (){
    const Iname = document.getElementById("i-name").value;
    const Oname = document.getElementById("o-name");
    const Iemail = document.getElementById("i-email").value;
    const Oemail = document.getElementById("o-email");
    const Imob = document.getElementById("i-mob").value;
    const Omob = document.getElementById("o-mob");
    const Iaddress = document.getElementById("i-address").value;
    const Oaddress = document.getElementById("o-address");
    const IjobTitle = document.getElementById("i-job-title").value;
    const OjobTitle = document.getElementById("o-job-title");
    const Ilink = document.getElementById("i-link").value;
    const OAlink = document.getElementById("o-a-link");
    const Ieducation = document.getElementById("i-education").value;
    const Oeducation = document.getElementById("o-education");
    const IstartMonth = document.getElementById("i-start-month").value;
    const IgradMonth = document.getElementById("i-grad-month").value;
    const Omonth = document.getElementById("o-month");
    const Icourse = document.getElementById("i-course").value;
    const Ocourse = document.getElementById("o-course");
    const Ilocation = document.getElementById("i-location").value;
    const Olocation = document.getElementById("o-location");

    Oname.innerText = Iname;
    Oemail.innerText = Iemail;
    Omob.innerText = Imob;
    Oaddress.innerText = Iaddress;
    OjobTitle.innerText = IjobTitle;
    OAlink.href = `https://${Ilink}`;
    OAlink.innerText = "Google";
    Oeducation.innerText = Ieducation;
    Omonth.textContent = `${IstartMonth} - ${IgradMonth}`;
    Ocourse.innerText = Icourse;
    Olocation.innerText = Ilocation;
}














// let Iname = document.querySelector("#i-name");
// let Oname = document.querySelector("#o-name");
// Iname.addEventListener("input",function (){
//     Oname.innerText = Iname.value;
//     console.log(Iname.value);
// });

// let Iemail = document.querySelector("#i-email");
// let Oemail = document.querySelector("#o-email");
// Iemail.addEventListener("input",function (){
//     Oemail.innerText = Iemail.value;
// });

// let Imob = document.querySelector("#i-mob");
// let Omob = document.querySelector("#o-mob");
// Iemail.addEventListener("input",function (){
//     Omob.innerText = Imob.value;
// });

// let Iaddress = document.querySelector("#i-address");
// let Oaddress = document.querySelector("#o-address");
// Iname.addEventListener("input",updateAddress);
// function updateAddress(e){
//     Oaddress.textContent = e.target.value;
    
// }