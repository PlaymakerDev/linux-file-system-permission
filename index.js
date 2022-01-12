function convert(symbolic) {

    // let symbolic_input = symbolic;
    let symbolic_match = symbolic.match(/^-([r-][w-][x-])([r-][w-][x-])([r-][w-][x-])$/);
    console.log(symbolic_match);

    if (!symbolic_match) return false;
    console.log(symbolic_match);

    let numberic = '0';
    for (let i = 1; i < symbolic_match.length; i++) {
        let start_number = 0;
        if (symbolic_match[i].match(/r/)) {
            start_number = start_number + 4
        } if (symbolic_match[i].match(/w/)) {
            start_number = start_number + 2
        } if (symbolic_match[i].match(/x/)) {
            start_number = start_number + 1
        }
        numberic = numberic + start_number;
    };
    // return symbolic_match;
    return numberic;

    // for(let i=0; i < symbolic_input.length; i++) {

    //     if(i == 3) {
    //         let split_symbolic = symbolic_input.slice(0, 3);
    //         let sym_arr = [0 + '' + '' + '' + ''];
    //         sym_arr.push(split_symbolic);
    //         return sym_arr;
    //         return split_symbolic;
    //     }
    //     return symbolic_input;
    // }
    // return numberic;
}

// console.log(1 === '1')

const result_log = convert('-rwxrwxrwx')
if (result_log) {
    console.log(result_log);
} else {
    console.log(false);
}

// if(convert('-r-xr-xr-x'))
console.log(convert('-rwxrwxrwx'));