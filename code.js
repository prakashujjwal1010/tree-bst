var n;
function Tree(){
    this.root=null;
    
}

Tree.prototype.addValue=function(val){
        n=new Node(val);
        if(this.root==null){
            this.root=n;
        }
        else{
            this.root.addNode(n);
        }
}
Tree.prototype.traverse=function(){
    if(this.root!=null){
        this.root.visit();
    }
    else{
        console.log("no node");
    }
}

Tree.prototype.searchTree=function(val){
    if(this.root!=null){
        this.root.search(val);
        }
    
    else{
        console.log("empty node");
    }
}

function Node(val){
    this.left=null;
    this.right=null;
    this.value=val;
}

Node.prototype.addNode=function(n){
    if(n.value<this.value){
        if(this.left==null){
            this.left=n;
        }
        else{
            this.left.addNode(n);
        }
    }
    else if(n.value>this.value){
        if(this.right==null){
            this.right=n;
        }
        else{
            this.right.addNode(n);
        }
    }
}
Node.prototype.visit=function(){
    if(this.left!=null){
        this.left.visit();
    }
    console.log(this.value);
    
    if(this.right!=null){
        this.right.visit();
    }
}

Node.prototype.search=function(val){
    if(this.value==val){
        console.log(this);
    }
    else if(val<this.value && this.left!=null){
        this.left.search(val);
    }
    else if(val>this.value && this.right!=null){
        this.right.search(val);
    }
}

var tree=new Tree();
tree.addValue(10);
tree.addValue(2);
tree.addValue(15);
tree.addValue(7);
tree.addValue(5);

tree.traverse();

tree.searchTree(5);