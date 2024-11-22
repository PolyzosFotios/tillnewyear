document.addEventListener('DOMContentLoaded', function(){
    let now = new Date();
    const currYear = now.getFullYear();
    const endOfYear = new Date(currYear+"-12-31T23:59:59");
    let diffInSeconds = Math.floor((endOfYear - now)/1000);

    let diffInSecsPrint = diffInSeconds.toLocaleString('el-GR');

    document.querySelector('#secs').innerHTML = diffInSecsPrint;

    function countSecs()
    { 
        diffInSeconds = diffInSeconds - 1;
        diffInSecsPrint = diffInSeconds.toLocaleString('el-GR');
        document.querySelector('#secs').innerHTML = diffInSecsPrint;
    }

    setInterval(countSecs,1000);
});