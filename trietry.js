class Tree{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
    setVal(val){
        this.val=val;
    }
    setLeft(node){
        this.left=node;
    
    }
    setright(node){
        this.right=node;
    }
}
var preorder = function(node){
    if(!node){
        return;
    }
    console.log(node.val);
    this.preorder(node.left);
    this.preorder(node.right);
}
var postorder = function(node){
    if(!node){
        return;
    }
    this.postorder(node.left);
    this.postorder(node.right);
    console.log(node.val);
    
}
var symmetricorder = function(node){
    if(!node){
        return;
    }
    
    this.symmetricorder(node.left);
    console.log(node.val);
    this.symmetricorder(node.right);
}