/// <reference path='fourslash.ts'/>

// @isolatedDeclarations: true
// @declaration: true
////
////class A extends class B {
////    /* comment1 */ x /* comment2 */: number; // comment4
////    /* comment5 */ y /* comment6 */: number; // comment8
////} {
////    z: number;
////}
////

verify.codeFix({
    description: "Extract base class to variable",
    index: 0,
    newFileContent:
`
const ABase: {
    new(): {
        x: number;
        y: number;
    };
} = class B {
    /* comment1 */ x /* comment2 */: number; // comment4
    /* comment5 */ y /* comment6 */: number; // comment8
    };
class A extends ABase {
    z: number;
}
`,
});
