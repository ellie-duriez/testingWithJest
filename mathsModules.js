//return an array with numers as items (from start, upto end, incrementing 0.1 at a time. return the full array.
const returnItteratedArray = (start,end) => {
    let list = [];
    for (i=start;i<=end;i+=0.1) {
        list.push(Math.round(i*100)/100); 
    }
    // for(i=0;i<list.length;i++) {
    // console.log(list[i])
    // }
    return list
}

module.exports = {
    returnItteratedArray
}