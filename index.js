/* let quote = "colin chris, hello! how are you??";
let quote2 = 'colin chris, hello! how are you??';
let Stringliteral = `colin chirs ${regex} colin chris, hello! how are you??`;
let quote3 = /colin chris, hello! how are you\?/;
 */
/* let regex = /\.\w+$/; */ // "." | wsjhfabf | + "end" 
// .{word} => at the end of the string
/* 

\. = a (.) 
\w+ = one or more characters ({a-zA-Z0-9})
$ = the end of the string
*/
const regex = new RegExp("\\.com$")
console.log(regex.test("skfjbsahfhsdbfbgfjjnaskf com"))
xgsgsdgfs

/* 

. = matching any character ESCAPE \.

\ = escaping the character itself ESCAPE \\

+ = one or more of previous ESCAPE \+

* = zero or more of previous ESCAPE \*

? = zero or one of previous ESCAPE \?
 
^ = start of string ESCAPE \^

` = backtick === | OR operate

{} = Quantifer and quantifer is a list of things that might be there. ESCAPE 
 "\{
 apple, orange, banana
 \}"

[] = character sets that must atleast be there. ESCAPE 

() = Grouping character together ESCAPE 

*/


