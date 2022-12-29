'use-strict';
import { GraphNode } from "./graph-node.js";

/**
 * 4.1 Given a directed graph and two nodes (S and E). 
 * Design an algorithm to determine to find out whether there is a route from S to E.
 * @param {GraphNode} start
 * @param {GraphNode} end 
 */
const routeBetweenNodesExists = (start, end) => {
    if (start === end){
        return true;
    }
    for(let node of start.Nodes){
        if (node === end){
            return true;
        }
    }
    for(let node of start.Nodes){
        if (routeBetweenNodesExists(node, end)){
            return true;
        }
    }
    return false;
}

export default {routeBetweenNodesExists};