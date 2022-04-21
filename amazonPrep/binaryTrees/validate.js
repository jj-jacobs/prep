var isValidBST = function(roots) {
    const result = []
    const stack = [root]
    if(root == null){
        return true
    }
    while(stack>0){
        console.log('right',current.right.val)
        const current = stack.pop()
        result.push(current.val)
        if(current.left.val<current.val || current.left.val === null){
            result.push(current.val)
        }
        else if(current.left.val>current.val){
            return false
        }
        if(current.right.val>current.val || current.right.val === null){
            result.push(current.val)
        }
        else if(current.right.val<current.val){
            return false
        }
    }
    console.log('result', result)
    return true
};

console.log(isValidBST([5,1,4,null,null,3,6]))