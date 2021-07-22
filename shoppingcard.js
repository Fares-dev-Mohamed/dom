const x = document.getElementById("cc");
var love = document.getElementsByClassName("fa fa-heart");
for (let i = 0; i < love.length; i++) {
    love[i].addEventListener("click", function() {
        if (love[i].style.color === "black") {
            love[i].style.color = "red";
        } else {
            love[i].style.color = "black";
        }
    });
}
var btnremove = x.getElementsByClassName("btn-danger");
for (i = 0; i < btnremove.length; i++) {
    x.getElementsByClassName("btn-danger")[i].addEventListener("click", removeFromCart);
}

function removeFromCart(event) {
    let toremove = event.target;
    toremove.parentElement.remove();
    total(null, null, event.target);
}
var btnPlus = x.getElementsByClassName("btn-plus");
for (i = 0; i < btnPlus.length; i++) {
    x.getElementsByClassName("btn-plus")[i].addEventListener("click", addone);
}

function addone(event) {
    let addo = event.target;
    addo.previousElementSibling.value++;
    total(event.target);
}
const btnm = x.getElementsByClassName("btn-mins");
for (i = 0; i < btnm.length; i++) {
    x.getElementsByClassName("btn-mins")[i].addEventListener("click", moinsone);
}

function moinsone(event) {
    let ado = event.target;

    if (ado.nextElementSibling.value <= 0) {
        ado.nextElementSibling.value == 0;
    } else {
        ado.nextElementSibling.value--;
        total(null, ado, null);
    }
}
const rowcart = x.getElementsByClassName("shop-items");
const price = x.getElementsByClassName("shop-item-price");
const quantity = x.getElementsByClassName("cart-quantity-input");
var tot = 0;

function total(addBtn, minusBtn, rem) {
    const totalprice = document.getElementById("totalprice");
    if (addBtn) {
        let unitPrice = addBtn.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.replace(
            "$", "");
        totalprice.innerHTML = +totalprice.innerHTML + parseInt(unitPrice);
    }
    if (minusBtn) {
        let unitPrice = minusBtn.previousElementSibling.innerHTML.replace("$", "");
        totalprice.innerHTML = +totalprice.innerHTML - parseInt(unitPrice);
    }
    if (rem) {
        let unitPrice = rem.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.replace(
            "$",
            ""
        );
        let quantite =
            rem.previousElementSibling.previousElementSibling.previousElementSibling
            .value;
        totalprice.innerHTML = +totalprice.innerHTML - parseInt(unitPrice) * quantite;
    }
}