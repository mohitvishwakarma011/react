import GridElement from "./GridElement";

const CustomShowComponent = ({section})=>{

    const {layout} = section?.card?.card;
    const {padding} = section?.card?.card?.header?.headerStyling
    const {info,style} = section?.card?.card?.gridElements?.infoWithStyle
    console.log(section);

    return(
        <div className="w-8/12 m-auto text-black font-bold text-3xl rounded">
            {/* <h1 className={`pt-${padding.top} pl-${padding.left} pb-${padding.bottom}`}>{section.card.card.header.title}</h1>
            {info.map((element)=><GridElement key={element.id} element={element} layout={layout} style={style}/>)} */}
        </div>
    )
}

export default CustomShowComponent;