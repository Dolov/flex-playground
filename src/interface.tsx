

export interface ViewProps {
  data: Array<any>;
  focusId: symbol;
  remove: Function;
  addItem: Function;  
  onSelectItem: Function;
  containerFlexProps: object;
}


export interface ContainerPropsConfigProps {
  containerFlexProps: object;
  onContainerPropsChange: Function;
}


export interface ItemPropsConfigProps {
  onChange: Function;
  itemFlexProps: object; 
  form?: any;
}

export interface FlexItemProps {
  id: symbol;
  index: number;
  remove: Function;
  focusId: symbol;
  onClick: Function;
}