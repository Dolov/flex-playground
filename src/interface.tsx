

export interface ViewProps {
  data: Array<any>;
  remove: Function;
  addItem: Function;  
  containerFlexProps: object;
}


export interface ContainerPropsConfigProps {
  containerFlexProps: object;
  onContainerPropsChange: Function;
}


export interface ItemPropsConfigProps {
  itemFlexProps: object; 
}

export interface FlexItemProps {
  index: number;
  remove: Function;
}