function minFriend(str_ara) {
    let min = str_ara[0].length;
    str_ara.map(v => min = Math.min(min, v.length));
    result = str_ara.filter(v => v.length == min);
    return result;
  }
  
  console.log(minFriend(['rayhan', 'rakib', 'prantoo','karimuddin','jamaluddin']));
  