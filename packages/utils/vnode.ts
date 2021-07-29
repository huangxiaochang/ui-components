import { Fragment, Text, Comment } from 'vue'

import type { VNode, VNodeChild } from 'vue'

const TEMPLATE = 'template'

export const isFragment = (node: VNodeChild) => (node as VNode).type === Fragment

export const isText = (node: VNodeChild) => (node as VNode).type === Text

export const isComment = (node: VNodeChild) => (node as VNode).type === Comment

export const isTemplate = (node: VNodeChild) => (node as VNode).type === TEMPLATE

/**
 * get a valid child node (not fragment nor comment)
 * @param node {VNode} node to be searched
 * @param depth {number} depth to be searched
 */
function getChildren(node: VNode, depth: number): undefined | VNode {
  if (isComment(node)) return
  if (isFragment(node) || isTemplate(node)) {
    return depth > 0
      ? getFirstValidNode(node.children as VNodeChild, depth - 1)
      : undefined
  }
  return node
}

/**
 * determine if the element is a valid element type rather than fragments and comment e.g. <template> v-if
 * @param node {VNode} node to be tested
 */
export const isValidElementNode = (node: VNodeChild) =>
  !(isFragment(node) || isComment(node))

export const getFirstValidNode = (
  nodes: VNodeChild,
  maxDepth = 3,
): ReturnType<typeof getChildren> => {
  if (Array.isArray(nodes)) {
    return getChildren(nodes[0] as VNode, maxDepth)
  } else {
    return getChildren(nodes as VNode, maxDepth)
  }
}
