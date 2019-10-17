import route from "path-match"

export default function createRouter(routes) {
    const matchers = Object.keys(routes).map(path => [route()[path], routes[path]])
    return function(path){
        return matchers.some(([matchers, f]) => {
         const result = matchers(path)
         if(result === false) return false;
         if(result) return true;
        })
    }
}