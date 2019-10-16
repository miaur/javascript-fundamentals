import { argumentPlaceholder } from "@babel/types";

describe("Numbers", () => {
    it("Should use remainder operator '%' ", () => {
        const a = 15;
        const b = 10;

        function modulo(x, y) {
            return x % y;
        }

        expect(modulo(a, b)).toBe(5);
        expect(modulo(b, b)).toBe(0);
    });

    test("Should get average of 3 numbers", () => {
        function average(a, b, c) {
            return (a + b + c) / 3
        }
        expect(average(2, 4, 6)).toBe(4);
        expect(average(-5, 12, -7)).toBe(0);
    });

    test("Should get a last digit of the number", () => {
        function lastDigit(num) {
            if (Number.isInteger(num)) {
                return num % 10
            } else {
                return Number(String(num).slice(-1));
            }
            return -1;
        }

        expect(lastDigit(123)).toBe(3);
        expect(lastDigit(3982)).toBe(2);
        expect(lastDigit(3982.55)).toBe(5);
    });

    test("Should sum the digits of a given number", () => {
        function sumDigits(num) {
            let str = String(num);
            let retStr = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] != '.') {
                    retStr += Number(str[i]);
                }
            }
            return retStr;
        }

        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(53)).toBe(8);
        expect(sumDigits(53.7)).toBe(15);
    });

    test("Should return true if specified number is prime", () => {
        function isPrime(n) {
            if (n === 1) {
                return false;
            } else if (n === 2) {
                return true;
            } else {
                for (let x = 2; x < n; x++) {
                    if (n % x === 0) {
                        return false;
                    }
                }
                return true;
            }
        }
        expect(isPrime(7)).toBe(true);
        expect(isPrime(4)).toBe(false);
        expect(isPrime(27)).toBe(false);
    });

    test("Should convert string to number", () => {
        function convert(n) {
            return Number(n);
        }
        expect(convert('234')).toBe(234);
    });

    test("Should find highest value", () => {
        // TODO: Write 2 functions max and max2. Only one of them should use Math

        function max() {
            return Math.max.apply(null, arguments);
        }

        function max2() {
            let maxNum;
            if (arguments.length == 1) return arguments[0];
            for (let i = 0; i < arguments.length - 1; i++) {
                if (arguments[i] > arguments[i + 1]) {
                    maxNum = arguments[i];
                } else {
                    maxNum = arguments[i + 1];
                }
            }
            return maxNum;
        }

        expect(max(1, 2)).toBe(2);
        expect(max2(1, 7, 2, 8, 5)).toBe(8);
    });

    test("Should find lowest value", () => {
        function min()
        {
            return Math.min.apply(null, arguments);
        } 

        function min2() {
            let maxNum;
            if (arguments.length == 1) return arguments[0];
            for (let i = 0; i < arguments.length - 1; i++) {
                if (arguments[i] < arguments[i + 1]) {
                    maxNum = arguments[i];
                } else {
                    maxNum = arguments[i + 1];
                }
            }
            return maxNum;
        }
        expect(min(2, 3, 9, 4, 1, 5)).toBe(1);
        expect(min2(2, 3, 9, 4, 1, 5)).toBe(1);
        // TODO: Write additional tests
    });

    test("Should round up a value to the nearest integer", () => {
        function ever(n){
            Math.round(n);
        }
        expect( ever(1) ).toBe(1);
        expect( ever(1.8) ).toBe(2);
        expect( ever(1.3)).toBe(1);
        expect( ever(-1.2)).toBe( -1 );
    });

    test("Should get the largest integer less than or equal to a given number.  ", () => {
        expect( /* ??? 1 */ ).toBe(1);
        expect( /* ??? 1.2 */ ).toBe(1);
        expect( /* ??? 1.8 */ ).toBe(1);

        // TODO: Write additional tests
    });

    test.only("Should return the base10 representation of a binary string", function() {
        function toDEC( dec ) {
                    var out = 0, len = dec.length, bit = 1;
                    while( len-- ) {
                        out += dec[ len ] == "1" ? bit : 0;
                        bit <<= 1;
                    }
                    return out;
                }
        function toDEC2(num){
            return num.toString(10);
        }
        expect( toDEC("11000000") ).toBe(192);
    });

    test("Should convert an eight-bit string number to a binary string", function() {
        expect( /* ??? 127 */ ).toBe("1010111");
        expect( /* ??? 65 */ ).toBe("110101");
    });
});