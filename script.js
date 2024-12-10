document.addEventListener('DOMContentLoaded', function(){
    let now = new Date();
    const currYear = now.getFullYear();
    let currMonth = now.getMonth() + 1;
    let currDay = now.getDate();

    let endOfYear = new Date(currYear+"-12-31T23:59:59");

    let diffInSeconds = Math.floor((endOfYear - now)/1000);

    let diffInSecsPrint = diffInSeconds.toLocaleString('el-GR');
    
    if (currMonth === 1 && currDay == 1){
        crtConf();
        document.querySelector('#sub').innerHTML = "— it's new year's eve! but only for the next"
        let endOfEve = new Date(currYear+"-01-01T23:59:59");
        diffInSeconds = Math.floor((endOfEve - now)/1000);
        document.querySelector('#msg').innerHTML = "happy new year! tell your people that you love them.";
        
        document.body.style.background = "radial-gradient(#a5d296, #7aa581, #347b52)"; 
        countSecs();
    }
    else{
        document.querySelector('#secs').innerHTML = diffInSecsPrint;
        document.body.style.background = "radial-gradient(#3e709c, #674da9, #3e709c)";
        
    }

    document.body.style.backgroundSize = "300% 300%";
    document.body.style.animation = "waveBackground 30s infinite alternate ease-in-out";

    function crtConf()
    {
        const cont = document.getElementById("confetti");
        for (let i = 0; i< 10; i++)
        {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");

            confetti.style.left = Math.random() * 95 + "vw";
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 90%, 80%)`; // Πολύχρωμα
            confetti.style.animationDuration = Math.random() * 3 + 3 + "s";
            confetti.style.width = confetti.style.height = Math.random() * 10 + 20 + "px";
        
            cont.appendChild(confetti);

            confetti.addEventListener("animationend", () => {
                confetti.remove();
            })
        }
    }

    function countSecs()
    { 
        
        if (diffInSeconds === 0)
        {
            location.reload();
        }
        else
        {
            diffInSeconds = diffInSeconds - 1;
            diffInSecsPrint = diffInSeconds.toLocaleString('el-GR');
            document.querySelector('#secs').innerHTML = diffInSecsPrint;
        }
        
    }

    setInterval(countSecs,1000);

    if (currMonth === 1 && currDay == 1){
        setInterval(crtConf,2000);
    }
});