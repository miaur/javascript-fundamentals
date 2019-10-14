describe("Data types", () => {
    describe("Boolean", () => {
        it("Should define False and True boolean variables", () => {
            var a = false;
            var b = true;

            expect(a).toBeFalsy();
            expect(typeof a).toBe("boolean");
            expect(b).toBeTruthy();
            expect(typeof b).toBe("boolean");
        });

        it("Should use different logical operators with 2 boolean operands", () => {
            const FALSE = false;
            const TRUE = true;

            let useLogicalAnd = FALSE && TRUE;
            let useLogicalOr = FALSE || TRUE;
            let useLogicalNot = !FALSE;
            let useDoubleLogicalNot = !!null;

            expect(useLogicalAnd).toBe(false);
            expect(useLogicalOr).toBe(true);
            expect(useLogicalNot).toBe(true);
            expect(useDoubleLogicalNot).toBe(false);
        });

        it("Should use different logical operators with at least 3 boolean operands", () => {
            const a = false;
            const b = false;
            const c = true;
            const d = true;

            let cond1 = (a || c) && d;
            let cond2 = (!a) && c && d;
            let cond3 = a || (b && c);
            let cond4 = !(c && d) || (!!null);

            expect(cond1).toBe(true);
            expect(cond2).toBe(true);
            expect(cond3).toBe(false);
            expect(cond4).toBe(false);
        });
    });

    describe("Number", () => {
        it.only("Should define different numbers", () => {
            let a = 2;
            let b = 0.5;
            let c = NaN;
            let d = Infinity;
            let nan;

            expect(a).toBe(10);
            expect(!Number.isFinite(b)).toBe(true);
            expect(c).toBeGreaterThan(20);
            expect(c).toBeLessThan(21);
            expect(d).toBeLessThan(0);
            expect(nan).toBeNaN();
        });

        it("Should use base operators", () => {
            const a = 10;
            const b = 30;

            expect(a + b).toBe( /* ??? */ );
            expect( /* Put Expression Here */ ).toBe(-20);
            expect( /* Put Expression Here */ ).toBe(20);
            expect( /* Put Expression Here */ ).toBe(300);
            expect( /* Put Expression Here */ ).toBe(3);
            expect( /* Put Expression Here */ ).toBeCloseTo(0.333);
        });

        it("Should combine base operators", () => {
            const a = 10;
            const b = 30;
            const c = 100;

            expect(a + b + c).toBe(140);
            expect( /* Put Expression Here */ ).toBe(400);
            expect( /* Put Expression Here */ ).toBe(2000);
            expect( /* Put Expression Here */ ).toBe(3300);
            // TODO: write 3 own test
        });

        it("Should convert to number", () => {
            expect(Number("123")).toBe(123);
            expect(Number("12.3")).toBe(12.3);

            expect( /* Number(???) */ ).toBe(12);
            expect( /* Number(???) */ ).toBe(12.3);
            expect( /* Number(???) */ ).toBe(0);
            expect( /* Number(???) */ ).toBe(0);
            expect(Number("0b11")).toBe( /* ??? */ );
            expect(Number("foo")).toBe("/* ??? */");
            expect( /* Number(???*/ ).toBe(NaN);
            expect(Number( /* "???" */ )).toBe(Number.NEGATIVE_INFINITY);
        });
    });

    describe("String, object, null, undefined and symbols", () => {
        it("String", () => {
            let str1; // Use single quote
            let str2; // Use String(???)
            let str3; // Use new String(???)
            let str4; // Use template string and str1 variable

            expect(str1).toBe("string");
            expect(str1 === str2).toBeTruthy();
            expect(str1 === str3).toBeFalsy();
            expect(str1 === str4).toBeTruthy();
            expect( /* use typeof */ ).toBe("object");
        });

        it("Should define object with 2 props", () => {
            let obj; // Define object with 2 props

            expect(typeof obj).toBe("object");
            expect(Object.keys(obj).length).toBe(2);

            // TODO: write 2 own tests
        });

        it("Should define variable with Null and undefined values", () => {
            let nullVar; // Set null
            let undefinedVar; // Set undefined
            let someVar; // Do not define it!!!

            expect(nullVar).toBeNull();
            expect(undefinedVar).toBe(undefinedVar);
            expect(someVar).toBe(undefined);
            expect( /* typeof ??? */ ).toBe("object");
            expect( /* typeof ??? */ ).toBe("undefined");
        });

        it("Should define 2 Symbol variable with the same description", () => {
            const smbl1 = Symbol("test");
            const smbl2 = Symbol("test");

            expect(typeof smbl1).toBe( /* ??? */ );
            expect(typeof smbl2).toBe( /* ??? */ );
            expect( /* Compare smbl1 and smbl2  */ ).toBe( /* ??? */ );
        });
    });
});