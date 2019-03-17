module.exports = function check(str, bracketsConfig) {
    // your solution
    let regexpStr="";
    // get info from config
    bracketsConfig.forEach(element => {
        //escaping
        let open = element[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let close = element[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        regexpStr=`${regexpStr}${open}${close}|`
    });
    regexpStr = regexpStr.substring(0, regexpStr.length-1); //remove |

    let rex = new RegExp(`${regexpStr}`,"g")
    
    while(rex.test(str)){
        str = str.replace(rex,'');
    }

    return str.length===0;


};
