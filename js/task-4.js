function getShippingCost(country) { //*функція "getShippingCost", приймає параметр (country) */

    switch (country) { //* Використовуємо оператор "switch" для перевірки значення (country)*/
        case "China":
            //* Якщо країна - Китай, встановлюємо повідомлення про вартість доставки (100  credits) і т.д.*/
            return "Shipping to China will cost 100  credits";
            break;
        case "Chile":
            return "Shipping to Chile will cost 250 credits";
            break;
        case "Australia":
            return "Shipping to Australia will cost 170 credits";
            break;
        case "Jamaica":
            return "Shipping to Jamaica will cost 120 credits";
            break;
        default:
            //*Якщо країна не входить в список - повідомлення про неможливість доставки */
            return "Sorry, there is no delivery to your country";
    }
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"