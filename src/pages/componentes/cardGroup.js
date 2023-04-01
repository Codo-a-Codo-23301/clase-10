import  fullData from "../../data/data.js";
import Card from "./card";

export default function CardGroup() {

    return (

            fullData.map(item => (
                <Card data={ item } key={item.id} />
            )
        )
    )
}
