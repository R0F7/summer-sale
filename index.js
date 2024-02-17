let titleCount = 1;
let totalPrice = 0;

// all card selection 
const cards = document.querySelectorAll('.card');
// console.log(cards);

// for (const card of cards) {
//     console.log(card);
// }

for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    // console.log(card);

    card.addEventListener('click', function () {

        //title find and append 
        const titleElement = card.querySelector('h3').innerText;

        const titleContainer = document.getElementById('title-container');

        const p = document.createElement('p');
        p.innerText = titleCount + '. ' + titleElement;

        titleContainer.appendChild(p);

        titleCount++;


        //price select & price calculation & adding
        const priceElement = card.querySelector('span').innerText.split(' ')[1];
        const price = Math.floor(priceElement);
        totalPrice += price;

        const totalPriceElement = document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);

    })

}


const btn = document.getElementById('apply-btn');
// console.log(btn);
btn.addEventListener('click', function () {

    // get value from input 
    const couponElement = document.getElementById('input-field').value;
    const couponCode = couponElement.split(' ').join('').toUpperCase();

    //discount price calculate and showing the display

    if (totalPrice >= 200) {
        if (couponCode === "SELL200") {
            const discountElement = document.getElementById('discountPrice');
            const discountAmount = totalPrice * 0.2 ;
            discountElement.innerText = discountAmount.toFixed(2) ;

            const totalElement = document.getElementById('total');
            totalElement.innerText = totalPrice - discountAmount.toFixed(2);

        } else {
            alert('Invalid Coupon')
        }
    } else {
        alert('Please spend at least $200')
    }
})