const s = "pPoooyY";
function solution(s){
    const p = s.match(/p/gi) && s.match(/p/gi).length;
    const y = s.match(/y/gi) && s.match(/y/gi).length;
    return p === y ? true : false
}

solution(s);