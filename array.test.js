import { isNull, isUndefined } from "util";

describe('Array', () => {
    it('Should find the position of the first occurrence', () => {
        const arr1 = [1, 5, 8, 3, 2];

        function getPos(arr, el) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == el) {
                    return i;
                }
            }
        }
        expect(getPos(arr1, 5)).toBe(1);
        expect(getPos(arr1, 3)).toBe(3);

        // TODO: Write additional its
    });

    it('Should return the specified array twice', () => {

        function doubleArr(arr) {
            return arr.concat(arr);
        }
        expect(doubleArr([1, 2, 3])).toStrictEqual([1, 2, 3, 1, 2, 3]);

        // TODO: Write additional its
    });

    it('Convert the number array to  the array of string values', () => {
        function convertToStringArr(arr) {
            var retArr = [];
            for (let i = 0; i < arr.length; i++) {
                if (isNull(arr[i])) {
                    retArr.push('null');
                    continue;
                }
                if (isUndefined(arr[i])) {
                    retArr.push('undefined');
                    continue;
                }
                if (typeof arr[i] === 'object') {

                    function convertObjToStr(obj) {
                        let ret = "{";
                        let index = -1;
                        for (let k in obj) {
                            index += 1;
                            let v = obj[k];

                            if (typeof v === "function") {
                                v = v.toString();
                            } else if (v instanceof Array) {
                                v = JSON.stringify(v);
                            } else if (typeof v === "object") {
                                v = convertObjToStr(v);
                            } else if (typeof v === "string") {
                                v = '\'' + v + '\'';
                            } else {
                                v = `${v}`;
                            }
                            ret += `${k}:${v}`;
                            if (index != Object.keys(obj).length - 1)
                                ret += ', ';
                        }

                        ret += "}";

                        return ret;
                    }

                    retArr.push(convertObjToStr(arr[i]));
                    continue;
                }
                retArr.push(arr[i].toString());
            }
            return retArr;
        }
        expect(convertToStringArr([1, 2, 3])).toStrictEqual(['1', '2', '3']);
        expect(convertToStringArr([{ a: 1, b: 2 }, 2, null, 'aaa', NaN, true, undefined])).toStrictEqual(['{a:1, b:2}', '2', 'null', 'aaa', 'NaN', 'true', 'undefined']);
        expect(convertToStringArr([{ a: 1, b: 2, c: { a: 'obj', c: true } }])).toStrictEqual(['{a:1, b:2, c:{a:\'obj\', c:true}}']);
    });

    it('Should return the number of all occurrences of specified item in an array', () => {
        function calculateOccurences(arr, item) {
            var count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == item) count++;
            }
            return count;
        }
        expect(calculateOccurences([1, 2, 1, 4, 1], 1)).toBe(3);

        // TODO: Write additional its
    });

    it('Should convert strings from specified array to uppercase', () => {
        function toUppercase(arr) {
            var retArr = [];
            for (let i = 0; i < arr.length; i++) {
                retArr.push(arr[i].toUpperCase());
            }
            return retArr;
        }
        expect(toUppercase(["aaaa", "abc"])).toStrictEqual(['AAAA', 'ABC']);
    });

    it('Insert an item at specified position', () => {
        function insert(arr, item, pos) {
            arr.splice(pos, 0, item);
            return arr;
        }
        expect(insert([1, 2, 4], 3, 2)).toStrictEqual([1, 2, 3, 4]);
    });

    it('Should return the n last items from the specified array', () => {
        function last(arr, count) {
            arr.splice(0, arr.length - count);
            return arr;
        }
        expect(last([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7]);
    });

    it('Return the 3 largest items from integer array', () => {
        function find3Largest(arr) {
            var retArr = [];
            var item = arr[0];
            var ind = 0;

            function findLargest(arr1) {
                for (let i = 1; i < arr1.length; i++) {
                    if (arr1[i] > item) {
                        item = arr1[i];
                        ind = i;
                    }
                }
                retArr.push(item);
                arr.splice(ind, 1);
                item = arr[0];
                ind = 0;
            }
            findLargest(arr);
            findLargest(arr);
            findLargest(arr);
            return retArr;
        }
        expect(find3Largest([1, 3, 8, 3, 29, 11, 2, 17, 9, 1])).toStrictEqual(
            [29, 17, 11]
        );
    });

    it('Sort numbers array by using array method', () => {
        function sort(arr) {
            return arr.sort(function(a, b) { return b - a });
        }
        expect(sort([2, 3, 1, 8, 4, 5])).toStrictEqual([8, 5, 4, 3, 2, 1]);
    });

    it('Should summarize of all items of numbers array', () => {
        function sum(arr) {
            var summ = arr[0];
            for (let i = 1; i < arr.length; i++) {
                summ += arr[i];
            }
            return summ;
        }
        expect(sum([1, 5, 7, 9, 3])).toBe(25);
    });

    it('Should return the numbers of falsy value in the specified array', () => {
        expect( /* getNumberOfFalsy([1, 0, "", null, "hello", "0"]) */ ).toBe(3);
    });

    it('Should return an array of unique items from the specified array', () => {
        expect( /* unique(["a", "b", "a", "c", "e", "b", "o"]) */ ).toStrictEqual([
            'a',
            'b',
            'c',
            'e',
            'o'
        ]);
    });

    it('Should return a map of grouped data by key and value selector', function() {
        let arr = [
            { country: 'Belarus', city: 'Brest' },
            { country: 'Russia', city: 'Omsk' },
            { country: 'Russia', city: 'Samara' },
            { country: 'Belarus', city: 'Grodno' },
            { country: 'Belarus', city: 'Minsk' },
            { country: 'Poland', city: 'Lodz' }
        ];

        expect( /* group(arr, 'country') */ ).toStrictEqual([
            ['Belarus', ['Brest', 'Grodno', 'Minsk']],
            ['Russia', ['Omsk', 'Samara']],
            ['Poland', ['Lodz']]
        ]);
    });

    it('Should creates an array with all falsy values removed.', () => {
        function compact(arr) {
            for (let i = 0; i < arr.length; i++) {
                if (isNull(arr[i]) || !arr[i]) {
                    arr.splice(i, 1);
                    i = -1;
                }
            }
            return arr;
        }
        expect(compact([1, 0, null, "a"])).toStrictEqual([1, 'a']);
    });

    it('Should flattens array a single level deep', () => {
        expect( /* flatten([1, [2, [3, [4]], 5]]) */ ).toStrictEqual([
            1,
            2, [3, [4]],
            5
        ]);
    });

    it('Should recursively flattens array.', () => {
        expect( /* flattenDeep([1, [2, [3, [4]], 5]]) */ ).toStrictEqual([
            1,
            2,
            3,
            4,
            5
        ]);
    });

    it('Should creates an array of unique values that are included in all given', () => {
        expect( /* intersection([1, 2, 3, 4], [8, 3, 1, 0, 9]) */ ).toStrictEqual([
            1,
            3
        ]);
    });

    it('Should remove all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with two arguments: (value, index).', () => {
        const arr = [1, 7, 5, 2, 8];
        const gt5 = v => v > 5;

        let removed;

        function remove(arr1, gt) {
            removed = [];
            for (let i = 0; i < arr1.length; i++) {
                if (gt(arr1[i])) {
                    removed.push(arr1[i]);
                    arr1.splice(i, 1);
                }
            }
        }
        remove(arr, gt5);
        expect(arr).toStrictEqual([1, 5, 2]);
        expect(removed).toStrictEqual([7, 8]);
    });
});