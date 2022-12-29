'use-strict';

import { GraphNode } from "../trees-and-graphs/graph-node.js";
import routeBetweenNodes from "../trees-and-graphs/route-between-nodes.js";
import assert from 'node:assert';

describe('TreesAndGraphs', () => {
    describe('#routeBetweenNodes', () => {
        it('should return true if start and end are the same node', () => {
            const start = new GraphNode();
            const end = start;

            const actual = routeBetweenNodes.routeBetweenNodesExists(start, end);

            assert.strictEqual(actual, true);
        });
        it('should return true for directly connected nodes', () => {
            const start = new GraphNode();
            const end = new GraphNode();
            start.Nodes.push(end);

            const actual = routeBetweenNodes.routeBetweenNodesExists(start, end);
            
            assert.strictEqual(actual, true);
        });
        it('should return true for nodes indirectly connected', () => {
            const start = new GraphNode();
            const end = new GraphNode();
            const middle = new GraphNode();

            start.Nodes.push(middle);
            middle.Nodes.push(end);

            const actual = routeBetweenNodes.routeBetweenNodesExists(start, end);

            assert.strictEqual(actual, true);
        });
        it('should return false for nodes without links', () => {
            const start = new GraphNode();
            const end = new GraphNode();

            const actual = routeBetweenNodes.routeBetweenNodesExists(start, end);

            assert.strictEqual(actual, false);
        });
        it('should return false for nodes with links but are not connected', () => {
            const start = new GraphNode();
            const end = new GraphNode();
            const middle = new GraphNode();

            start.Nodes.push(middle);
            end.Nodes.push(middle);

            const actual = routeBetweenNodes.routeBetweenNodesExists(start, end);

            assert.strictEqual(actual, false);
        });
    });
});