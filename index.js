function theBeatlesPlay(musicians, instruments){
  var arr= [];
  for(var i=0; i<musicians.length; i++){
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var arr = []
  var n = 0
  while (facts.length > n) {
    arr.push(facts[n]+'!!!')
    n=n+1
  }
  return arr;
}

function iLoveTheBeatles(n){
  var arr =[];
  do{
    arr=[...arr, "I love the Beatles!"];
    n=n+1;
  }while(n<15);
  return arr;
}