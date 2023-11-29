
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
    const Igrade = document.getElementById("i-grade").value;
    const Ograde = document.getElementById("o-grade");
    const IprogLang = document.getElementById("i-prog-lang").value;
    const OprogLang = document.getElementById("o-prog-lang");
    const ImarkUp = document.getElementById("i-markup").value;
    const OmarkUp = document.getElementById("o-markup");
    const Itools = document.getElementById("i-tools").value;
    const Otools = document.getElementById("o-tools");
    const Idatabase = document.getElementById("i-database").value;
    const Odatabase = document.getElementById("o-database");

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
    Ograde.innerText = Igrade;
    OprogLang.innerText = IprogLang;
    OmarkUp.innerText = ImarkUp;
    Otools.innerText = Itools;
    Odatabase.innerText = Idatabase;
}





