// console.log('Hello world.....')

// var a=5
// function GetName(){
//     console.log('Namastee JS.....')
// }


function reverseWords(sentence) {
  // Step 1: Split the sentence into words
  let words = sentence.split(' ');
  
  // Step 2: Reverse the words using two pointers (without using reverse)
  let left = 0;
  let right = words.length - 1;
  
  while (left < right) {
      // Swap the words
      let temp = words[left];
      words[left] = words[right];
      words[right] = temp;
      
      // Move the pointers towards the center
      left++;
      right--;
  }
  
  // Step 3: Join the words back into a sentence
  return words.join(' ');
}

// Example usage
let sentence = "The quick brown fox jumps over the lazy dog";
let reversedSentence = reverseWords(sentence);
console.log(reversedSentence);  // Output: "dog lazy the over jumps fox brown quick The"


// Definition for singly-linked list node.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function swapPairs(head) {
  // Create a dummy node to simplify handling of the head node
  let dummy = new ListNode(0);
  dummy.next = head;
  
  let current = dummy;
  
  while (current.next !== null && current.next.next !== null) {
      let first = current.next;
      let second = current.next.next;
      
      // Swapping the nodes
      first.next = second.next;
      second.next = first;
      current.next = second;
      
      // Move the current pointer to the next pair
      current = first;
  }
  
  return dummy.next;
}

// Helper function to print the list (for testing)
function printList(head) {
  let current = head;
  while (current !== null) {
      console.log(current.val);
      current = current.next;
  }
}

// Example usage
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

let newHead = swapPairs(head);
printList(newHead);  // Output: 2 -> 1 -> 4 -> 3

def longest_subarray_with_sum_multiple_of_k(arr, k):
    # Map to store the first occurrence of the modulo result
    mod_map = {}
    prefix_sum = 0
    max_len = 0
    
    for i in range(len(arr)):
        # Update the prefix sum
        prefix_sum += arr[i]
        
        # Calculate modulo of the current prefix sum with k
        mod = prefix_sum % k
        
        # If the modulo is negative, adjust it to be positive
        if mod < 0:
            mod += k
        
        # If mod is 0, it means the subarray from the start to current index is divisible by k
        if mod == 0:
            max_len = i + 1
        elif mod in mod_map:
            # If mod has been seen before, calculate the length of the subarray
            max_len = max(max_len, i - mod_map[mod])
        else:
            # If mod hasn't been seen, store its first occurrence
            mod_map[mod] = i
    
    return max_len


// GetName()
// console.log(a)
// console.log(GetName)
// console.log(Fun1)
// var Fun1=function Name(){
//     console.log(4*5)
// }

// var a = 1;
// b();
// c();
// console.log(a);
// function b() {
//   var a = 10;
//   console.log(a);
// }
// function c() {
//   var a = 100;
//   console.log(a);
// }

// const value='458'
// const res=typeof(value)+value
// console.log(res)

// const heading=document.getElementById('heading')
// heading.onclick=()=>{
//   heading.innerText='Namstee Guru'
// }

// function a(){
//   console.log(c)
// }
// const c=10
// a()

// function a(){
//   console.log(c)
//   const c=20
// }
// a()

// console.error('Hello');

// x()
// function x(){
//     console.log(10)
// }

// function a(){
//     let s=10
//     function b(){
//         console.log(s)
//     }
//     return b
// }
// let res=a()
// console.log(res)

// console.log(a)
// function a(){
//     console.log(154)
// }

// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function (){
//             console.log(i )
//         },i*1000)
//     }
//     console.log('Hello world.......')
// }
// x()

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function closu(x) {
//       setTimeout(() => {
//         console.log(x);
//       }, i * 3000);
//     }
//     closu(i)
//   }
//   console.log("Hello world.....");
// }
// x();


// function z() {
//   var f = 10;
//   function x() {
//     var g = 20;
//     function c() {
//       console.log(g,f);
//     }
//     c();
//   }
//   x();
// }
// z();


// first class functions--------


let f=function (param1){
  console.log(param1)
}
f(function (){

})


let k=function (param1){
  console.log(param1)
}  
function xyz(){

}
k(xyz)


var x=function (param1){
    return function hello(){
  
    }
}

import OpenAI from "openai"

const openai=new OpenAI({})