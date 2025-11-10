let title=document.getElementById('title');
let image=document.getElementById("image");
let descr=document.getElementById("descr");
let readmore=document.getElementById('readmore');
let likeb=document.getElementById('likeb');
let light=document.getElementById('light');
let likeunlike=document.getElementById('likeunlike');
let likebtn=document.getElementById('likebtn');
let getnews=document.getElementById("getnews")


let data= async ()=>
{
    let info= await fetch("https://newsdata.io/api/1/latest?apikey=pub_1e584d2fa8954932b6584569c177df8a&q=india");
    let res= await info.json();
    console.log(res);
    title.innerText=res.results[0].title;
    descr.innerText=res.results[0].description;
    image.innerHTML= `<img src="${res.results[0].image_url}" id='imag'>`  // i have applied css to this "imag" from external css
    readmore.innerHTML=`<a href="${res.results[0].link}"><button id="newbtn">read more</button></a></div>`
}

light.addEventListener('click',
    ()=>
    {
        console.log('button clicked');
        if (light.innerHTML==`<img src="like_light.png" class="im">`)
            {
                light.innerHTML=`<img src="like_dark.png" class="im">`;
            }
        else
        {
            light.innerHTML=`<img src="like_light.png" class="im"></img>`;
        }

    }
)

getnews.addEventListener('click', ()=>
{
    data();
})