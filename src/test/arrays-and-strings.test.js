"use-strict"

import { ArraysAndStrings } from "../question/arrays-and-strings.js";
// import { mocha }from "mocha";
const mocha = import("mocha");
const assert = import("assert").strict;
const arraysAndStrings = new ArraysAndStrings();

describe("ArraysAndStrings", () =>
    it("question 1.1 should handle empty string", () =>{
        let result = arraysAndStrings.question1_1("1");
        assert.equals(result, null);
    }),
    it("question 1.1 should handle invalid entry", () =>{
        assert.equals(1, 1); 
    }),
);