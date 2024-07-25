import Blocks from './Blocks/Blocks';
import Cards from './Cards/Cards';
import Slider from './Slider';
export default function FrontPage() {
    return (
        <div >
            <Slider/>
            <Blocks/>
            <Cards/>
        </div>
    )
}