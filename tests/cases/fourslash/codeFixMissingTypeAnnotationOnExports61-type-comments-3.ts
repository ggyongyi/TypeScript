/// <reference path='fourslash.ts'/>

// @isolatedDeclarations: true
// @declaration: true
////
////function f() {
////    return /* comment1 */ { // comment2
////        /* comment3 */ x /* comment4 */: /* comment5 */ 1, // comment6
////        /* comment7 */ y /* comment8 */: /* comment9 */ 'test' // comment10
////    }; // comment 12
////}
////export default f();
////

verify.codeFix({
    description: "Extract default export to variable",
    index: 0,
    newFileContent:
`
function f() {
    return /* comment1 */ { // comment2
        /* comment3 */ x /* comment4 */: /* comment5 */ 1, // comment6
        /* comment7 */ y /* comment8 */: /* comment9 */ 'test' // comment10
    }; // comment 12
}
const _default_1: {
    x: number;
    y: string;
} = f();
export default _default_1;
`,
});
