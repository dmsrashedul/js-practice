function showTime() {   
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById("clock").innerText = time;
    
};
setTimeout(showTime, 1000);