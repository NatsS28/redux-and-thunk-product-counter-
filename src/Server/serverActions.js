export const getProducts = (num) => {
    // if (num === 0) {
    //     num = num + 1;
    // }
    const data = fetch('https://fakestoreapi.com/products/'+num).then((res) => res.json()).then((json) => json)
    return data;
}