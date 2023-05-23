let key = [
    "AC", "(", ")", "C", '<img src="https://cdn-icons-png.flaticon.com/512/2087/2087825.png" class="delete">',
    7, 8, 9, "/", "√",
    4, 5, 6, "*", "x²", 
    1, 2, 3, "-", "=",
    0, ".", "%", "+"
  ];
  function render_keys(){
    let dom_keyboard = document.querySelector(".teclado");

    key.forEach((each_key)=>{
        let div = document.createElement("div");
        div.innerHTML = each_key;
        div.classList.add("key_item");

        key.forEach((each_key2,indice)=>{
            each_key == indice ? div.classList.add("key_tiem_color1") : null
        });
        each_key == "=" ? div.classList.add("key_tiem_color2") : null

        dom_keyboard.appendChild(div);
    });
}