export enum G6Event {
  CLICK = 'click',
  MOUSEDOWN = 'mousedown',
  MOUDEUP = 'mouseup',
  DBLCLICK = 'dblclick',
  CONTEXTMENU = 'contextmenu',
  MOUSEENTER = 'mouseenter',
  MOUSEOUT = 'mouseout',
  MOUSEOVER = 'mouseover',
  MOUSEMOVE = 'mousemove',
  MOUSELEAVE = 'mouseleave',
  DRAGSTART = 'dragstart',
  DRAGEND = 'dragend',
  DRAG = 'drag',
  DRAGENTER = 'dragenter',
  DRAGLEAVE = 'dragleave',
  DDROP = 'drop',
  NODE_CLICK = 'node:click',
  EDGE_CLICK = 'edge:click',
  NODE_CONTEXTMENU = 'node:contextmenu',
  EDGE_CONTEXTMENU = 'edge:contextmenu',
  NODE_DBLCLICK = 'node:dblclick',
  EDGE_DBLCLICK = 'edge:dblclick'
}

export type IEvent = Record<G6Event, string>
