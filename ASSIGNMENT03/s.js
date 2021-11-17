const f1=function(){
    console.log("Demo of anonymous function f1");
}
function f2(){
    console.log("Demo of named function f2");
}
(function(){
   f1();
   f2();
  console.log("Demo of first closure called only once");

})();