function clock()
{
    const time=new Date();
    console.log(time);
    const hour=time.getHours();
    const minute=time.getMinutes();
    const second=time.getSeconds();
    document.querySelector('.hour').textContent=hour + ' :';
    document.querySelector('.minute').textContent=minute+ ' :';;
    document.querySelector('.second').textContent=second;
}

setInterval(clock, 6000);