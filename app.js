//input daxilindeki x-in maus uzre deyismesi
let imgXGray = document.querySelector(".x-gray");
let imgXPurple = document.querySelector(".x-purple");
imgXGray.addEventListener("mouseover", () => {
    imgXGray.classList.toggle("x-purple");
    imgXPurple.classList.toggle("x-purple");
    
})

imgXGray.addEventListener("mouseout", () => {
    imgXGray.classList.toggle("x-purple");
    imgXPurple.classList.toggle("x-purple");
})
//A dan z-ye siramanin maus uzre deyismesi
let aZ1 = document.querySelector(".a-z");
let aZ2 = document.querySelector(".a-zblack");
let aZ3 = document.querySelector(".z-a");
let aZ4 = document.querySelector(".z-ablack");

aZ1.addEventListener("mouseover", () => {
    aZ1.classList.toggle("disnone");
    aZ2.classList.toggle("disnone");
})
aZ1.addEventListener("mouseout", () => {
    aZ1.classList.toggle("disnone");
    aZ2.classList.toggle("disnone");
})
aZ3.addEventListener("mouseover", () => {
    aZ3.classList.toggle("disnone");
    aZ4.classList.toggle("disnone");
})
aZ3.addEventListener("mouseout", () => {
    aZ3.classList.toggle("disnone");
    aZ4.classList.toggle("disnone");
})
// x ile inpit sahesine yazilan deyerin silinmesi
let inp = document.querySelector("input");
imgXPurple.addEventListener("click", () => {
    inp.value = "";
});
imgXGray.addEventListener("touchstart", () => {
    inp.value = "";
});
//Yazilan deyerleri liste elave etmek
let textDiv = document.querySelector(".list");
let inpdiv = document.querySelector(".inp");
let orderlist = document.querySelector("ol");
inp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let text = inp.value;
        if (text.trim() !== "") {
            let listItem = document.createElement("li");
            listItem.className = "list-item";
            listItem.textContent = text;
            orderlist.appendChild(listItem);
            listItem.insertAdjacentHTML('afterend', '<img src="./img/gray_cancel.svg" class="deleteButton x-gray" alt="Sil">');
            let imgXGray = listItem.nextSibling;
            imgXGray.addEventListener("mouseover", () => {
                imgXGray.src = "./img/purple_cancel.svg";
            });
            imgXGray.addEventListener("mouseout", () => {
                imgXGray.src = "./img/gray_cancel.svg";
            });
            imgXGray.addEventListener("click", () => {
                orderlist.removeChild(listItem);
                imgXGray.remove();
                if (orderlist.children.length === 0) {
                    textDiv.classList.add("disnone");
                    inpdiv.classList.remove("disnone");
                }
            });
            imgXGray.addEventListener("touchstart", () => {
                orderlist.removeChild(listItem);
                imgXGray.remove();
                if (orderlist.children.length === 0) {
                    textDiv.classList.add("disnone");
                    inpdiv.classList.remove("disnone");
                }
            });

            inp.value = "";

            textDiv.classList.remove("disnone");
            textDiv.classList.add("text");
            inpdiv.classList.add("disnone");
        }
    }
});
//plus ile inputun gorunub yeni metn eleve edilmes
let insert = document.querySelector(".plus");
insert.addEventListener("click",()=>{
    imgXPurple.addEventListener("click", () => {
        inp.value = "";
    });
    inpdiv.classList.remove("disnone");
        let text = inp.value;
        if (text.trim() !== "") {
            let listItem = document.createElement("li");
            listItem.className = "list-item";
            listItem.textContent = text;
            orderlist.appendChild(listItem);
            listItem.insertAdjacentHTML('afterend', '<img src="./img/gray_cancel.svg" class="deleteButton x-gray" alt="Sil">');
            let imgXGray2 = listItem.nextSibling;
            imgXGray2.addEventListener("mouseover", () => {
                imgXGray2.src = "./img/purple_cancel.svg";
            });
            imgXGray2.addEventListener("mouseout", () => {
                imgXGray2.src = "./img/gray_cancel.svg";
            });
            imgXGray2.addEventListener("click", () => {
                orderlist.removeChild(listItem);
                imgXGray2.remove();
                if (orderlist.children.length === 0) {
                    textDiv.classList.add("disnone");
                    inpdiv.classList.remove("disnone");
                }
            });
            imgXGray2.addEventListener("touchstart", () => {
                orderlist.removeChild(listItem);
                imgXGray2.remove();
                if (orderlist.children.length === 0) {
                    textDiv.classList.add("disnone");
                    inpdiv.classList.remove("disnone");
                }

            });

            inp.value = "";

            textDiv.classList.remove("disnone");
            textDiv.classList.add("text");
            inpdiv.classList.toggle("disnone");
        }

})
// a-z ye ve z-a ya siralama
function sortListAZ(){
    let items = Array.from(orderlist.querySelectorAll(".list-item"));
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));
    items.forEach(item => {
        let deleteButton = item.nextSibling;
        orderlist.removeChild(item);
        orderlist.removeChild(deleteButton);
        orderlist.appendChild(item);
        orderlist.appendChild(deleteButton);
    });
}
aZ2.addEventListener("click", () => {
    sortListAZ();
    aZ1.classList.toggle("disnone");
    aZ3.classList.toggle("disnone");
});
function sortListZA() {
    let items = Array.from(orderlist.querySelectorAll(".list-item"));
    items.sort((a, b) => b.textContent.localeCompare(a.textContent));
    items.forEach(item => {
        let deleteButton = item.nextSibling;
    
        orderlist.removeChild(item);
        orderlist.removeChild(deleteButton);
        orderlist.appendChild(item);
        orderlist.appendChild(deleteButton);
    });
}
aZ4.addEventListener("click", () => {
    sortListZA();
    aZ1.classList.toggle("disnone");
    aZ3.classList.toggle("disnone");
});

aZ1.addEventListener("touchstart", () => {
    sortListAZ();
    aZ1.classList.toggle("disnone");
    aZ3.classList.toggle("disnone");
});

aZ3.addEventListener("touchstart", () => {
    sortListZA();
    aZ1.classList.toggle("disnone");
    aZ3.classList.toggle("disnone");
});