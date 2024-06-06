//Enter the size of the array
function arrayMap(){
    let target
    let resultArr=[]
    let isArrExist=false
while(true){
   size=parseInt(prompt("Enter the size of the array to test: "))
    if(!isNaN(size)&&size>0 && size<=100000)//Set the size to be between 1 and 100,000
    {
        break;
    }
    else{
        prompt("Enter a valid value (number), not less than 0")
    }

}
//initialize an array of a specified size
let arr= new Array(size)
console.log(`array with size of ${size} is initialized!`)

//Input the values
for(let i=0; i<size; i++){
   
    let number=parseFloat(prompt(`Enter value ${i} for array: `))
    
    if(!isNaN(number)){

 arr[i]=number
 console.log(`${arr} array is now updated. it is now ${arr.length}`)
        }
        else{
            console.log("Enter a valid number")
        }
}

//Input target

let targetTemp=parseInt(prompt("Enter target number: "))
if(!isNaN(targetTemp)){
target=targetTemp
}


arr.map((el, i)=>{
    let sum=el
    let subarray=[el]
    for(let j=i+1; j<arr.length; j++){
        sum+=arr[j]
        subarray.push(arr[j])
    if(sum==target){
        isArrExist=true
        //console.log(`${subarray} array match`)
   resultArr.push(subarray)
    }
    
        }
})

console.log(isArrExist)

}