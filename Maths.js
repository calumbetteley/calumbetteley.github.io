function solvetheequation(){
 var a = Number (document.getElementById("a").value)
 var b = Number (document.getElementById("b").value)
 var c = Number (document.getElementById("c").value)
 var d = Number (document.getElementById("d").value)
 var e = Number (document.getElementById("e").value)
 var f = Number (document.getElementById("f").value)
console.log(a,b,c,d,e,f)
var x = 1/(a*e-b*d)*(e*c-b*f)
var y = 1/(a*e-b*d)*(-d*c+a*f)
document.getElementById("result").innerHTML = "x = "+x+", y = "+y

}
