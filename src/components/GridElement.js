import { res_logo_cdn } from "../utils/constants";

const GridElement = ({layout,element,style}) => {
    const {columns,horizontalScrollEnabled,itemSpacing,rows,containerStyle} = layout;
    // const { height,width} = style

  return (
    <div className={`grid grid-rows-${rows} grid-cols-${columns} gap-${itemSpacing}`}>
      <img className={`h-${height.value} w-${width.value}`} src={res_logo_cdn+element.imageId} alt="Banner photo"></img>
    </div>
  )
}

export default GridElement
