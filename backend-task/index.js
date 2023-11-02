const logTree = require('console-log-tree');

// const data = ['root', 'A', 'B']
// const data = ['root', 'A', 'B', 'C', 'D', 'E', 'F']
const data = ['root', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N']
/*
{
    name: Root,
    children: [
            {
                name: A,
                children: [
                    {
                        name: C
                    },
                    {
                        name: D
                    }
                ]
            },
            {
                name: B,
                children: [
                    {
                        name: E
                    },
                    {
                        name: F
                    }
                ]
            }
        ]
}
*/
/**
 * Recursive function for drawing the tree with console-log-tree
 * @param {Array} data - All nodes of the tree, in order
 * @param {Number} curr - Current node
 * @returns The Node in correct format
 */
const drawNode = (tree, curr) => {
    // If current node is on leaf level
   return {
    name: tree[curr - 1],
    children: Math.ceil(Math.log2(curr)) > Math.log2(data.length) ?
                [] :
                [
                    drawNode(tree, curr*2),
                    drawNode(tree, curr* 2 + 1)
                ]
   } 
}
console.log(Math.ceil(Math.log2(11)))

const tree = {
    name: data[0],
    children: [
        drawNode(data, 2),
        drawNode(data, 3)
    ]
}

const treeStr = logTree.parse(tree)

console.log(treeStr)

