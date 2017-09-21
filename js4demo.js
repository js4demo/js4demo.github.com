console.log('j4drr loaded')


j4d = function(id){
    j4d.dir.push(this)
    this.firstCreated=Date()
    this.div=document.getElementById(id)
    if(this.div){
        // most methods will followthis pattern, 
        // of taking the js4demo object instance, jd,
        // as the input argument 
        j4d.UI(this)
    }
}

j4d.dir=[] // keep diretory of reference for each instance here

j4d.UI=function(jd){
    var h = '<h1 style="color:green"><i class="fa fa-pagelines" aria-hidden="true" style="font-size:50"></i> </h3>'
    jd.div.innerHTML=h
    4

    //debugger
}

// ini
window.onload=()=>{
    var id = 'js4demoDiv' // landing page
    if(document.getElementById(id)){ // if this is teh landing page, create j4d instance
        new j4d(id)
    }
}

