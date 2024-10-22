const insert = document.getElementById('insert');

window.addEventListener('keydown',(event)=>{
    console.log(event.key)
    
    insert.innerHTML = `
    <div class="key">
    ${event.key === " " ? "Space":event.key}
    <small>event.key</small>
    </div>

    <div class="key">
    <small>event.keyCode</small>
    ${event.keyCode}
    </div>

    <div class="key">
    <small>event.code</small>
    ${event.code}
    </div>


    `

})