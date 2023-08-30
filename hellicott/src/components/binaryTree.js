class BinaryTreeNode {

    constructor(key, value, parent) {
        this.key = key;
        this.value = value;
        this.dot = null;
        this.dash = null;
        this.parent = parent;
    }

    getDot(){
        if (this.dot != null){
            return this.dot
        }
        else{
            throw new Error("Invalid morse code")
        }
    }
    
    getDash(){
        if (this.dash != null){
            return this.dash
        }
        else{
            throw new Error("Invalid morse code")
        }
    }

    setDot(node) {
        this.dot = node
    }

    setDash(node) {
        this.dash = node
    }

}

export class BinaryTree {

    constructor(key, value = key) {
        this.root = new BinaryTreeNode(key, value);
    }

    *preOrderTraversal(node = this.root) {
        yield node;
        if (node.dot) yield* this.preOrderTraversal(node.dot);
        if (node.dash) yield* this.preOrderTraversal(node.dash);
    }

    insert(
        key,
        { dot, dash },
        parentNodeKey,
        value = key
    ) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === parentNodeKey) {
                const canInsertdot = dot && node.dot === null;
                const canInsertdash = dash && node.dash === null;

                if (!canInsertdot && !canInsertdash) return false;

                if (canInsertdot) {
                    node.setDot(new BinaryTreeNode(key, value, node));
                    return true;
                }

                if (canInsertdash) {
                    node.setDash(new BinaryTreeNode(key, value, node));
                    return true;
                }
            }
        }
        return false;
    }

}
