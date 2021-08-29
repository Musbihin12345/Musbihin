function darkmode() {
    console.log ("oke")
    let element = document.body;
    element.classList.toggle("darkmode");

    let topwrapper = document.getElmentById("1")
    topwrapper.classList.toggle("darkmode");

    let container = document.getElmentById("2")
    container.classList.toggle("darkmode");

    let welcome = document.getElmentById("3")
    welcome.classList.toggle("darkmode");

    let name = document.getElmentById("4")
    name.classList.toggle("darkmode");

    let description = document.getElmentById("5")
    description.classList.toggle("darkmode");

    let contact = document.getElmentById("6")
    contact.classList.toggle("darkmode");

    let copyright = document.getElmentById("7")
    copyright.classList.toggle("darkmode");
 }