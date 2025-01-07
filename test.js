function getCount(str) {
    let count = 0;
    for (let i = 0;i<str.length;i++) {
      if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u") {
        count++;
      }
    }
    return count;
}

function divisors(integer) {
    let count = 0;
    let tomb = [];
    for(let i = 2;i<integer;i++) {
      if (integer % i == 0) {
        count++;
        tomb.push(i);
      }
    }
    if (count!=0) {
        return tomb
    }
    else {
        return integer+" is prime"
    }
}

function filter_list(l) {
    let res = [];
    for(let i=0;i<l.length;i++) {
      if (typeof l[i] == "number") {
        res.push(l[i])
      }
    }
    return res;
}

function hasUniqueChars(str){
    return str.split('').every(function(v, i, arr){
      return arr.indexOf(v) == i;
    });
}
