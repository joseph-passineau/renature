let foi = float_of_int;
let iof = int_of_float;
let sof = Js.Float.toString;

[@bs.val] external parseFloat: string => float = "parseFloat";