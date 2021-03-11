function comma(num) {
    // return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    ns = num.toString();
    nss = ''
    count = 0;
    for (let i=ns.length-1; i>=0; i -= 1) {
        nss = count%3 === 0 && count !== 0 ? ns[i] + ',' + nss: ns[i] + nss;
        count++;
    }
    return nss;
}

console.log(comma(1000000000)); //1,000,000,000