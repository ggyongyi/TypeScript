/// <reference path='fourslash.ts'/>

// @isolatedDeclarations: true
// @declaration: true
////
////export function f() {
////    const object = /** comment1 */ { /* comment2 */ // comment3
////        // comment4
////        /* comment5 */ x /* comment6 */ : /* comment7 */ 42 /* comment8 */ , // comment9
////        // comment10
////        /** comment11 */ y : /* comment12 */ 'test' /** comment13 */, // comment14
////        // comment15
////    } /** comment16 */;
////    return object;
////}
////

verify.codeFix({
    description: "Add return type '{ x: number; y: string; }'",
    index: 0,
    newFileContent:
`
export function f(): {
    x: number;
    y: string;
} {
    const object = /** comment1 */ { /* comment2 */ // comment3
        // comment4
        /* comment5 */ x /* comment6 */ : /* comment7 */ 42 /* comment8 */ , // comment9
        // comment10
        /** comment11 */ y : /* comment12 */ 'test' /** comment13 */, // comment14
        // comment15
    } /** comment16 */;
    return object;
}
`,
});
