
const Container=document.querySelector(".container");
console.log(Container);
for(let i=0; i<3; i++)
{
    Container.innerHTML += `<div class="card">
            <div class="card-image">
                <img id="img1" src="./resources/assets/images/Frame 26.png">
                <img id="img2" src="./resources/assets/images/Frame 27.png">
            </div>
            <div class="card-discription">
                <p id="p1">Perfected Strategies for you</p>
                <p id="p2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui repudiandae minima explicabo aspernatur! Non, pariatur.
                </p>
        </div>
        </div>`
    
}

