
const menu = document.getElementById('menu')
const menuBar = document.getElementById('menu-bar')
const navMenu = document.getElementById('nav-menu')
const plate1 = document.getElementById("row-size1")
const plate2 = document.getElementById("row-size2")
const plate3 = document.getElementById("row-size3")
const plate4 = document.getElementById("row-size4")
const plate5 = document.getElementById('row-size5') 
const plate6 = document.getElementById('row-size6') 
const plate7 = document.getElementById('row-size7') 
const arrow1 = document.getElementById('first-arrow')
const about = document.getElementById("about")
const login = document.getElementById("login")
const body = document.getElementById("body")
const pic = document.getElementById('pic')
const plates = document.querySelectorAll('.row-size')
const logins = document.getElementById('logins')

gsap.registerPlugin(ScrollTrigger);


const displayBar = () =>{
	menuBar.onclick= () =>{
	 gsap.fromTo(menu, {x: -1200 , opacity: 0,}, {x: 0,  opacity:1, duration: 0.05, display: "flex", 
	 ease:"elastic.in(1.5,1)",})
	// tl.fromTo(".cta4", {x:"100%", opacity:0,}, {x:0, opacity:1}, "<20%");
	 
		// menu.style.transform = transform
		console.log('clicked')
		body.style.overflowY = "hidden"
	}
	
	navMenu.onclick= () =>{
		gsap.fromTo(menu, {x: -0 ,display: "flex", }, {x: -1000, opacity:0,  duration: 0.05,  
		ease:"elastic.in(1.5,1)",})
		 menu.style.display = "none"
		console.log('clicked')
		body.style.overflowY = ""
	}
}
displayBar()

const moveplates = () => {

	 add=0	
	arrow1.onclick = () =>{
		add++
		console.log(add)
		if (add == 1){
		gsap.fromTo(plates, {x: 0,}, {x: -220, 
			opacity: 1, 
			duration: 0.5,
			delay: 0.1,

		   scrollTrigger: arrow1,     
		})
		gsap.fromTo(plate5, {x:0, opacity:0,}, {
			opacity: 1, 
			display: 'flex',

		   scrollTrigger: arrow1,     
		})
		plate2.style.marginTop = '50px'
		plate4.style.marginTop = '0px'
		plate5.style.marginTop = '50px'
		plate1.style.opacity = "0px"
		}
		else if (add == 2){
			gsap.fromTo(plates, {x: 0,}, {x: -220, 
				opacity: 1, 
				duration: 0.5,
				delay: 0.1,
	
			   scrollTrigger: arrow1,     
			})
			gsap.fromTo(plate1, {x:0, opacity:0,}, {
				opacity: 1, 
				display: 'flex',
	
			   scrollTrigger: arrow1,     
			})
			plate1.style.display = "none"
			plate3.style.marginTop = '50px'
			plate5.style.marginTop = '0px'
			// plate.style.marginTop = '50px'
			}
		

	
}
}
moveplates()


const openLog = ()=>{
   login.onclick =() =>{
	gsap.fromTo(logins,{opacity:0 ,}, {opacity: 1, duration: 0.1,})
	logins.style.display = "flex"
	body.style.overflowY = "hidden"
   }	
}

openLog()








const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '05f08f301bmsh5c9a58b41791942p14fccfjsn4b79ed18f46b',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

fetch('https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=293919&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=30&open_now=false&lang=en_US', options)
	.then(response => response.json())
    .then(data => console.log(data))
	.catch(err => console.error(err));

   
   // .then(data => pic.innerHTML= `<img src="${data.data.photo.images.original.url}" />`)
    //.then(data => pic.innerHTML= `<img src="${data.data[0].photo.images.original.url}" />`)