module.exports = function solveEquation(equation) {
  var a,b,c, x1, x2, x0;
    //142 * x^2 - 1069080086 * x + 2011605981501984
  var eq = equation.split(' ');
  a = eq[0];
  b = (eq[3] == '+') ? eq[4] : -eq[4];
  c = (eq[7] == '+') ? eq[8] : -eq[8];
  d = b*b - 4*a*c;
  x1 = (-b - Math.sqrt(d))/(2*a);
  x2 = (-b + Math.sqrt(d) )/(2*a);

    if (x2 < x1) {
    x0 = x2;
    x2 = x1;
    x1 = x0;
  }

  return [Math.round(x1), Math.round(x2)]
}
