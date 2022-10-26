const canvas_zero = () => import('./es-canvas-zero')
const canvas_one = () => import('./es-canvas-one')
const canvas_two = () => import('./es-canvas-two')
const canvas_three = () => import('./es-canvas-three')
const canvas_four = () => import('./es-canvas-four')
const canvas_five = () => import('./es-canvas-five')
const canvas_six = () => import('./es-canvas-five')
const canvas_seven = () => import('./es-canvas-seven')
const canvas_eight = () => import('./es-canvas-eight')
const canvas_nine = () => import('./es-canvas-nine')
const canvas_ten = () => import('./es-canvas-ten')

const ESCanvasList = {
  canvas_zero: {
    name: '使用初探',
    component: canvas_zero,
  },
  canvas_one: {
    name: '基础',
    component: canvas_one,
  },
  canvas_two: {
    name: '复杂',
    component: canvas_two,
  },
  canvas_three: {
    name: '动画',
    component: canvas_three,
  },
  canvas_four: {
    name: '图形',
    component: canvas_four,
  },
  canvas_seven: {
    name: '进度条',
    component: canvas_seven,
  },
  canvas_eight: {
    name: '合成',
    component: canvas_eight,
  },
  canvas_nine: {
    name: '动画',
    component: canvas_nine,
  },
  canvas_ten: {
    name: '渐变和阴影',
    component: canvas_ten,
  },
};
export default ESCanvasList;
