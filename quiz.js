/* 1. What is the purpose of the backslash (\) in regular expressions?

A) It adds a space before the next character.
B) It removes the character before it.

C) It escapes special characters, making them literal.

D) It makes the next character uppercase. */

/* 2. What will the following regex match? */
/* const regex = /\?/;
console.log(regex.test("What?"));
console.log(regex.test("What")); */
/* A) Only "What?"
B) Only "What"
C) Both "What?" and "What"
D) Neither */

/* 3. Fill in the blank:

To match the string "2+2=4" using regex, you would write: */

/* const regex = /2 \+ 2 = 4/;
console.log(regex.test("2 + 2 = 4")); */
/* What should replace the __ to make it match correctly? */

/* 4. Why do we need to use \\ inside a RegExp constructor (e.g., new RegExp())?

A) Because JavaScript ignores single backslashes in strings.
B) Because \\ makes the regex run faster.
C) Because it allows regex to match two backslashes.
D) Because regular expressions always require double backslashes. */

/* 5. What will this regex match? */
const regex = /^[a-zA-Z0-9_./]+$/;
console.log("file.txt".match(regex));
console.log("image.jpg".match(regex));
console.log("ColinstTutoring/no_extension.png".match(regex));


/* A) Only .txt and .jpg
B) .txt, .jpg, and no_extension
C) Only .jpg
D) None */

/* 6. True or False:

The regex /\$100/ will match "Total: $100". */

/* const regex = /\$100/;
console.log(regex.test("$100"));
 */
/* 7. What will this regex match? */

/* const regex = /\[/;
console.log(regex.test("[")); */
/* A) A literal [ character
B) Any character inside square brackets
C) A closing bracket ]
D) Nothing, because [ doesn’t need escaping */

/* 8. Fill in the blank:

To match a backslash (\) in a string, we need to write it in regex as: */

/* const regex = /\\/;
console.log(regex.test("\\")); */
/* What should replace __? */