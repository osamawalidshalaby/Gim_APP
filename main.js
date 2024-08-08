let input = document.querySelector("#inp");
let btn = document.querySelector("button");
let delbtn = document.querySelector(".del");
let res = document.querySelector(".result");


share();
btn.addEventListener("click" , function(){
    let div = document.createElement("div");
    let p = document.createElement("p");
    let span = document.createElement("span");
    span.className = "sp"
    let inp = document.createElement("input")
    inp.className = "val"
    inp.addEventListener("input" , function(){
        span.innerHTML = `${inp.value} Kg`
        save();
    })
    inp.type = "number"
    p.prepend(input.value);
    p.appendChild(inp)
    div.appendChild(p);
    div.appendChild(span);
    res.appendChild(div);
    save();
    input.value = ""
})


res.addEventListener("input" , function(e){
    
    if (
      (e.target.parentElement.parentElement.lastElementChild.className = "sp")
    ) {
      e.target.parentElement.parentElement.lastElementChild.textContent = `${e.target.value} Kg`;
    }
    save();
})

function save(){
    window.localStorage.setItem("data" , res.innerHTML)
}

function share() {
    res.innerHTML = window.localStorage.getItem("data")
}



delbtn.onclick = function(){
    res.innerHTML = "";
    window.localStorage.clear()
}

