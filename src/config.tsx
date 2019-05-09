


export const flexContainerProps: any = {
  'flex-direction': {
    'description': '设置主轴方向，确定弹性子元素排列方式',
    'values': ['row', 'row-reverse', 'column', 'column-reverse'],
  },
  'flex-wrap': {
    'description': '当弹性子元素超出弹性容器范围时是否换行',
    'values': ['nowrap', 'wrap', 'wrap-reverse'],
  },
  'flex-flow': {
    'isHidden': true,
    'description': 'flex-direction 和 flex-wrap 属性的快捷方式，复合属性',
  },
  'justify-content': {
    'description': '主轴上的对齐方式',
    'values': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
  },
  'align-items': {
    'description': '侧轴上的对齐方式',
    'values': ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
  },
  'align-content': {
    'description': '侧轴上有空白时，侧轴的对齐方式',
    'values': ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
  },
}

export const flexItemProps: object = {
  'order': {
    'description': '控制弹性容器里子元素的顺序',
  },
  'flex-grow': {
    'description': '设置弹性子元素的扩展比率',
  },
  'flex-shrink': {
    'description': '设置弹性子元素的收缩比率',
  },
  'flex-basis': {
    'description': '指定弹性子元素伸缩前的默认大小值，相当于 width 和 height 属性。',
  },
  'flex': {
    'description': 'flex-grow, flex-shrink 和 flex-basis 属性的复合属性',
  },
  'align-self': {
    'description': '允许独立的弹性子元素覆盖弹性容器的默认对齐设置 (align-items)',
  },
}