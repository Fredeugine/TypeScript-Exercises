"use strict";
/**
 * START: Follow the instructions below.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Make this identity function generic.
// This should fix the type errors on Line 13 and 15.
// Hint: The type for the `value` function parameter should use a type variable.
function identity(value) {
    return value;
}
let value1 = identity("France");
let value2 = identity(67413000);
// ----
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const responseBody = yield response.json();
        return responseBody;
    });
}
// Pass the `User` type as a type argument to the generic `fetchData()` function.
// This should fix the type error on Line 35.
function blue() {
    return __awaiter(this, void 0, void 0, function* () {
        let FetchedData = yield fetchData("https://api.github.com/users/fredeugine");
        console.log(FetchedData.name);
    });
}
blue();
