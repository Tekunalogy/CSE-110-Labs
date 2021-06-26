# Part 1a.
1. `values added:  20`
2. `final result:  20`
3. `values added:  20`
4. Error because the console.log is references the value `result` which is in a different scope and no longer accessible.
5. Error because the console.log is reassigning the value `result` which is of type const and cannot be reassigned afterwards.
6. Error because of the previous issue. console.log is reassigning the value `result` in line 7, which is of type const and cannot be reassigned after line 5.

# Part 1b.
1. Line 12 will print i. The exact number it prints is `3` into the console. This is because the for loop has looped 3 times (starting at 0) for each item in the input array. After the final loop, i is incremented by 1 (going from 2 to 3) and the loop exits. Because `i` is of type var, the scope of the variable `i` extends beyond the for loop and is accessible to the console.log call in line 12.

2. Line 13 will print the value of `discountedPrice`. The exact number it prints is `150` into the console. This is because the for loop has looped 3 times (starting at 0) for each item in the input array. During the final loop, discountedPrice is calculated by accessing the 3rd element in the input array (300) and multiplying it by 1 - the discount (1 - 0.5 = 0.5). This results in the value being 300*0.5 = 150. discountedPrice is of type `var`, so the scope extends beyond the for loop and printing it causes no error.

3. Line 14 will print the value of `finalPrice`. The exact number it prints is `150` into the console. This is because the for loop has looped 3 times (starting at 0) for each item in the input array. During the final loop, discountedPrice is calculated and finalPrice rounds the value of discountedPrice which ends up remaining the same as the original value. finalPrice is of type `var`, so the scope extends beyond the for loop and printing it causes no error.

4. The function will return an array of size 3. Specifically it will return the array `[ 50, 100, 150 ]` because these are the values of the original array multiplied by the discount 0.5. The return value `discounted` is of type `var` whose scope is the method and thus accessible by the function.

5. Line 12 will cause an error because `i` is not in the scope of line 12. In fact, the scope of `i` is only in the for loop because it is of type `let`.

6. Line 13 will cause an error because `discountedPrice` is not in the scope of line 13. In fact, the scope of `discountedPrice` is only in the for loop because it is of type `let`.

7. Line 14 will print the value of `finalPrice`. The exact number it prints is `150` into the console. `finalPrice` is of type `let`, and so the scope of the variable would be the method block itself and thus accessible to line 14.

8. The function will return an array of size 3. Specifically it will return the array `[ 50, 100, 150 ]` because these are the values of the original array multiplied by the discount 0.5. The return value `discounted` is of type `let` whose scope is the method and thus accessible by the function.

9.  Line 11 will cause an error because `i` is not in the scope of line 11. In fact, the scope of `i` is only in the for loop because it is of type `let`.

10. This line prints the value `length` to the console, the value being `3`. This is because the scope of `length` is the function block itself, so it is accessible by line 12 which is also in the function block.

11. The function will return an array of size 3. Specifically it will return the array `[ 50, 100, 150 ]` because these are the values of the original array multiplied by the discount 0.5. The return value `discounted` is of type `var` whose scope is the method and thus accessible by the function.

12. - A. `student.name`
    - B. `student["Grad Year"]`
    - C. `student.greeting();`
    - D. `student["Favorite Teacher"].name`
    - E. `student.courseLoad[0]`

13. - A. `'32'` - appending number 2 to a character '3'
    - B. `1` - taking integer value of char '3' and subtracting 2 from it
    - C. `3` - null converts to 0, adding to 3 is 3
    - D. `'3null'` - converts null to a string and appends it to the character 3
    - E. `4` - true maps to an integer value of 1 and you are adding that to 3.
    - F. `0` - false maps to an integer value of 0 and adding null to an integer is also 0.
    - G. `'3undefined'` - undefined casted to a string and appended to character 3.
    - H. `NaN` - there is no way to subtract undefined from the character 3, no type casting available, so results in a NaN whic means Not-a-Number.

14. - A. `true` - the character '2''s integer value is larger than the integer 1.
    - B. `false` - javascript compares character by character, so it first compares '2' < '1' which results in false.
    - C. `true` - we are using double equals so the character is converted before checking equality, and we see 2 is equivalent to '2' after conversion.
    - D. `false` - Since there is a triple equals, there is no conversion of the character '2' and so the inputs are seen as different types and thus not equal.
    - E. `false` - true maps to a value of 1 and that does not equal 2.
    - F. `true` - Boolean will convert any input that isn't 0, -0, null, false, NaN, undefined, or the empty string ("") to true. Thus an input of 2 results in true and true === true is actually true.

15. `==` will do necessary type conversion before comparing equality. The `===` operator will not do type conversion before comparing.

16. `part1/part1b-16.js`

17. The result is that the methodcall at line 13 returns a new array with the values `[2,4,6]` which is each value of the input array `[1,2,3]` doubled. This is because we pass in the `doSomething` function as an input to `modifyArray` and in the for loop of the `modifyArray` function, the input function is called on each value of `[1,2,3]`.

18. `part1/part1b-question18.js`

19. The output of this program is:<br/>
    `1` <br/>
    `4` <br/>
    `3` <br/>
    `2` <br/>