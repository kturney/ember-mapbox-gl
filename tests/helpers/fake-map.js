export default class FakeMap {
  addControl() {}
  removeControl() {}
  addLayer() {}
  removeLayer() {}
  setPopup() {}
  on() {}
  addSource() {}
  removeSource() {}
  getCanvasContainer() {
    return document.createElement('div');
  }
}
