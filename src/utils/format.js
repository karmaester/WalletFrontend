export const formatDollar = (value) => {
    let newValue = parseFloat(value).toFixed(2)
    return `$ ${(newValue)}`;
}

export const formatBitcoin = (value) => {
    let newValue = parseFloat(value).toFixed(8)
    return `${(newValue)} BTC`;
}