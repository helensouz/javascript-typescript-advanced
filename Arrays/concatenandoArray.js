const nums1 = [1,2,3,4]
const nums2 = [5,6,7,8]
// const a3 = nums1.concat(nums2, [5,6,7,8], 'helen')
// console.log(a3)

const a3 = [...nums1, ...nums2];
console.log(a3)
