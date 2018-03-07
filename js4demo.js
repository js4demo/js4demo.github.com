console.log('j4d loaded')


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
    var h = '<h1 style="color:green"><i id="js4demoIcon" class="fa fa-pagelines" aria-hidden="true" style="font-size:50;cursor:pointer"></i> js4demo</h3>'
    h += '<p id="js4demoSubtitle" style="font-style:italic;color:green">JavaScript utilities for distributed direct Democracy <i id="js4demoWiki" class="fa fa-book" aria-hidden="true" style="font-size:large;cursor:pointer;color:blue"></i></p><hr>'
    jd.div.innerHTML=h
    js4demoIcon.onclick=function(){window.open('https://github.com/js4demo')}
    js4demoWiki.onclick=function(){window.open('https://github.com/js4demo/js4demo.github.com/wiki')}
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

