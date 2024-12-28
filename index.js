let v1=""
let CartQty=0;
const cont1=document.querySelector(".FD-container")
const search=document.getElementById("search")
const add=document.querySelector('.sample')
const Qty=document.querySelector('.qty')
let v5=[];



const Products=[
    {
        id:0,
        src:"images/Burger.jpg",
        name:"Burger",
    },
    {
        id:1,
        src:"images/Chapati.webp",
        name:"Chapati",
    },
    {
        id:2,
        src:"images/ChickenBiriyani.webp",
        name:"ChickenBriyani",
    },
    {
        id:3,
        src:"images/ChickenFriedRice.jpg",
        name:"ChickenFriedRice",
    },
    {
        id:4,
        src:"images/ChickenNoodles.jpg",
        name:"ChickenNoodles",
    },
    {
        id:5,
        src:"images/Dosa.jpg",
        name:"Dosa",
    },
    {
        id:6,
        src:"images/EggFriedRice.webp",
        name:"EggFriedRice",
    },
    {
        id:7,
        src:"images/EggNoodles.Webp",
        name:"EggNoodles",
    },
    {
        id:8,
        src:"images/Idli.jpeg",
        name:"Idli",
    },
    {
        id:9,
        src:"images/MuttonBriyani.jpg",
        name:"MuttonBriyani",
    },
    {
        id:10,
        src:"images/Parotta.jpg",
        name:"Parotta",
    },
    {
        id:11,
        src:"images/Pizza.jpg",
        name:"Pizza",
    },
    {
        id:12,
        src:"images/Poori.webp",
        name:"Poori",
    },
    {
        id:13,
        src:"images/VegFriedRice.jpg",
        name:"VegFriedRice",
    },
    {
        id:14,
        src:"images/VegNoodles.jpg",
        name:"VegNoodles",
    },
    


]
Qty.innerHTML=CartQty
function cartimg(){
    add.parentElement.style.display="block"
}
function cartimg1(){
    add.parentElement.style.display="none"
}

function searchValue(){
    let v2=""
    const cont1=document.querySelector(".FD-container")
    let FilterProducts =Products.filter((a)=>a.name.toLocaleLowerCase().includes(search.value.toLowerCase())||""==search.value)
   
    v1=FilterProducts.map(a=>{
    return `
            <div class="FD-card">
                <div class="FD-img">
                    <img src=${a.src} alt="">
                </div>
                <div class="FD-body">
                    <p class="FD-head">${a.name}</p>
                    <div><button id=${a.id}>Add To Cart</button></div>
                </div>
            </div>
    `
})

v1.forEach(a=>{
    v2+=a
 })
 function Remove(id){
    let v2=v5.filter(a=>a.id!==Number(id))
    v5=v2
    fit (...new Set(v5))
}

 cont1.innerHTML=v2

 const elememt1=document.querySelectorAll(".FD-body div button")
 function fit(...v3){
    CartQty=v3.length
    Qty.innerHTML=CartQty
    add.innerHTML=v3.map(a=>{
        return `
        <div class="FD-card" style="font-size:0.7rem;display:flex;align-items:center;font-weight:bold;gap:10px;box-shadow:1px 1px 8px rgba(0, 0, 0, 0.383);border-radius:10px;overflow:hidden;padding:5px">
            <div class="FD-img" style="padding:5px;overflow:hidden">
                <img style="border-radius:50%" src=${a.src} alt="">
            </div>
            <div class="FD-body">
                <p class="FD-head">${a.name}</p>
                <div >
                <button style="border:none;background-color:rgb(255, 115, 0);color:white;font-weight:bold;font-size:0.7rem;padding:5px;border-radius:10px" class="remove1" value="${a.id}" >Remove</button>
                </div>
            </div>
        </div>
`
    }).join(" ")
    let re1=document.querySelectorAll(".remove1")
    re1.forEach(a=>{
        a.addEventListener('click',()=>{
            Remove(a.value)
        })
    } 
    )
}
 elememt1.forEach(b=>{
    b.addEventListener('click',(e)=>{
        function addCart(){
            let v3=FilterProducts.filter(a=>{
                return Number(e.target.id)===a.id
            })
            v5=[...v3,...v5]
            fit(...new Set(v5))
            let re=document.querySelectorAll(".remove")
            re.forEach(a=>{
                a.addEventListener('click',()=>{
                    Remove(a.value)
                })
            }   
            )

        }
        addCart()
    })
}) 
}
searchValue()





















