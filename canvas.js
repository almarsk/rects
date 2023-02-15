window.addEventListener("load", ()=>{
    const canvas = document.querySelector('#canvas')
    const cont = document.querySelector('#cont')
    const ctx = canvas.getContext('2d')
    let coord

    //resizing
    function resize(){
        canvas.height = window.innerHeight*0.75
        canvas.width = window.innerWidth*0.75
       
        cont.style.marginTop = (window.innerHeight*0.125)+"px"
        cont.style.marginLeft = (window.innerWidth*0.125)+"px"
    }
    window.addEventListener('resize', resize)
    resize()
    
    //start measuring for rect
    function getCoordinates(e) { 
        return {x: e.clientX-parseInt(canvas.getBoundingClientRect().left), 
                y: e.clientY-parseInt(canvas.getBoundingClientRect().top)} 
    }

    canvas.addEventListener('mousedown', e=>{ 
        
        coord = getCoordinates(e)
        console.log(coord)
        ctx.fillStyle = 'hsl('+Math.floor(Math.random()*360)+', 100%, 50%)'
        canvas.addEventListener('mousemove', draw)
    })

    //draw a rectangle
    function draw(e){
        
        ctx.clearRect(coord.x,coord.y,getCoordinates(e).x-coord.x,getCoordinates(e).y-coord.y)
        ctx.strokeRect(coord.x,coord.y,getCoordinates(e).x-coord.x,getCoordinates(e).y-coord.y)
    }

    canvas.addEventListener('mouseup',(e)=>{
        canvas.removeEventListener('mousemove', draw)       
        ctx.fillRect(coord.x,coord.y,getCoordinates(e).x-coord.x,getCoordinates(e).y-coord.y)
    })
      
})