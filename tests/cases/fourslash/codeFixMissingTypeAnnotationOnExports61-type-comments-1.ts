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
////export const g = f();
////

verify.codeFix({
    description: "Add annotation of type '{ x: number; y: string; }'",
    index: 0,
    newFileContent:
`
function f() {
    return /* comment1 */ { // comment2
        /* comment3 */ x /* comment4 */: /* comment5 */ 1, // comment6
        /* comment7 */ y /* comment8 */: /* comment9 */ 'test' // comment10
    }; // comment 12
}
export const g: {
    x: number;
    y: string;
} = f();
`,
});
