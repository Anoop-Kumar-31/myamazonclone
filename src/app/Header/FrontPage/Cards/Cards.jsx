import Card from "./Card";
import css from './Cards.module.css'
export default function Cards() {
    const list =
    [{
        image:'https://m.media-amazon.com/images/I/716YUdHaK0L._AC_UL480_FMwebp_QL65_.jpg',
        name:'Kitsure Large Dish Drying Rack - Extendable Dish Rack, Multifunctional Dish Rack for Kitchen Counter, Anti-Rust Drying Dish Rack with Cutlery & Cup Holders 27" L x 12.9" W, Black',
        cost:'₹4999'
    },{
        image:'https://m.media-amazon.com/images/I/61qY6HNix0L._AC_UL480_FMwebp_QL65_.jpg',
        name:'Zulay Kitchen Premium Garlic Press Set - Rust Proof & Dishwasher Safe Professional Garlic Mincer Tool - Easy-Squeeze, Easy-Clean with Soft, Ergonomic Handle - Silicone Garlic Peeler & Brush (Silver)',
        cost:'₹599'
    },{
        image:'https://m.media-amazon.com/images/I/91REk69tROL._AC_UL480_FMwebp_QL65_.jpg',
        name:'Mueller Pro-Series 10-in-1, 8 Blade Vegetable Chopper, Onion Mincer, Cutter, Dicer, Egg Slicer with Container, French Fry Cutter Potato Slicer, Home Essentials, Salad Chopper White Sand/Green',
        cost:'₹3500'
    }]
    return(
        <main className= {css.cardscollection}>
        {list.map((item,index)=>(
            <Card key={index} image={item.image} name={item.name} cost={item.cost}/>
        ))}
        </main>
    )
}