function Stack(){
    let items = [];

    this.pop = () => {
        return items.pop();
    }

    this.push = (element) => {
        items.push(element);        
    }

    this.toString = () => {
        return items.toString();
    }

    this.isEmpty = () => {
        return items.length === 0;
    }

    this.peek = () => {
        return items[items.length - 1];
    }
    
    this.size = () => {
        return items.length;
    }
} 

function checkBrackets(args){
    let stack = new Stack();
    let stackIndex = new Stack();
    let obj = {
        "(": ')',
        "{": "}",
        "[": "]"
    }
    let result = true;

    let map = new Map(Object.entries(obj));

    //compare function
    function compare(input, stack, stackIndex){
        let brackets = map.get(stack.peek());
        if(brackets === input){
            stack.pop();
            stackIndex.pop();
            stackIndex.pop();
            return true;
        } else{
            //throw error at index in input
            let position = stackIndex.pop();
            console.log(position);
            return false;
        }
    }

    
    let unmatchedIndex = 0;
    for(let i = 0; i < args.length; i++){
        if(args[i] === '{' || args[i] === '[' || args[i] === '('){
            stack.push(args[i]);
            stackIndex.push(i + 1);
           
            if(stack.size() === 1){
                 unmatchedIndex = stackIndex.peek();
            }
        } else if(args[i] === '}' || args[i] === ']' || args[i] === ')'){
            noRightBracket = false;
            stackIndex.push(i + 1);
             result = compare(args[i], stack, stackIndex)
           if (result === false){
               break;
           }
        }

    }

    if(result === false){
        console.log('unmatched');
        console.log(stack.toString());
        return;
    }

    if(stack.isEmpty() === false && stackIndex.isEmpty() === false){
        //get the first item on the stack;
         console.log(unmatchedIndex);
         console.log(stack.toString());
         console.log('unmatched');

    }    
     else{
        console.log("Success");
    }

}


checkBrackets('fo(o)b{a{r]');
