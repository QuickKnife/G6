import { G6Event, IG6GraphEvent } from "@g6/types";

const DELTA = 0.05;

export default {
  getDefaultCfg(): object {
    return {
      sensitivity: 2,
      minZoom: 0.1,
      maxZoom: 10
    };
  },
  getEvents(): { [key in G6Event]?: string } {
    return {
      wheel: 'onWheel'
    };
  },
  onWheel(e: IG6GraphEvent) {
    e.preventDefault();
    if (!this.shouldUpdate.call(this, e)) {
      return;
    }
    const graph = this.graph;
    const canvas = graph.get('canvas');
    const point = canvas.getPointByClient(e.clientX, e.clientY);
    const pixelRatio = canvas.get('pixelRatio');
    console.log('pointpoint', point, e.clientX, e.clientY);
    const sensitivity = this.get('sensitivity');
    let ratio = graph.getZoom();
    // 兼容IE、Firefox及Chrome
    if (e.wheelDelta < 0) {
      ratio = 1 - DELTA * sensitivity;
    } else {
      ratio = 1 + DELTA * sensitivity;
    }
    const zoom = ratio * graph.getZoom();
    if (zoom > this.get('maxZoom') || zoom < this.get('minZoom')) {
      return;
    }
    console.log('ratioratio', ratio, point.x, point.y, pixelRatio);
    graph.zoom(ratio, { x: point.x / pixelRatio, y: point.y / pixelRatio });
    graph.paint();
    graph.emit('wheelzoom', e);
  }
};