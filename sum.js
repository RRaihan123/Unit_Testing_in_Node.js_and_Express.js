function sum1(a, b) {
    return a + b;
  }

let sum3 = function(b){
    return b;
 }

function sum2(a) {
  let b = sum3(1);
  let sum = a + b;
  return `adding ${a} makes the sum ${sum}`;
}

function fetchData(){
  return new Promise((resolve,reject) => {
                                            var p1 = false;
                                            if(p1){
                                                resolve("success");
                                            }
                                            else{
                                                reject("fail")
                                            }
                                        })
                    }

module.exports = {
  sum1,
  sum2,
  fetchData
};