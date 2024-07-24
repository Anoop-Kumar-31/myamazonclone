import css from './Blocks.module.css';
import MakeBlock from './MakeBlock';
export default function Blocks(){
    const list=[{
        "Electronics":[
            {url:'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg',name:'Headsets'},
            {url:'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg', name:'Keybords'},
            {url:'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg', name:'Computer mice'},
            {url:'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg', name:'Chairs'}
        ],
        "type":'fourXfour'
        },{
        "Beauty steals under ₹4000":[
            {url:'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v5._SY304_CB573698005_.jpg'},
        ],
        "type":"one"
        },{
        "Shop deals in Fashion":[
            {url:'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg', name:`Jeans under ₹1500`},
            {url:'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg', name:'Tops under ₹1200'},
            {url:'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg', name:'Dresses under ₹2000'},
            {url:'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg', name:'Shoes under ₹3000'}
        ],
        "type":'fourXfour'
        },{
        "Home décor under ₹5,000":[
            {url:'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg'},
        ],
        "type":"one"
        },{
        "Fashion trends you like":[
            {url:'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_2_x1._SY116_CB595261253_.jpg', name:'Dresses'},
            {url:'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_3_x1._SY116_CB595261253_.jpg', name:'Knits'},
            {url:'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_1_x1._SY116_CB595261253_.jpg', name:'Jackets'},
            {url:'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_4_x1._SY116_CB595261253_.jpg', name:'Jewelry'}
        ],
        "type":'fourXfour'
        },{
        "Toys under ₹3,000":[
            {url:'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg'},
        ],
        "type":"one"
        },{
        "Deals in PCs":[
            {url:'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg'},
        ],
        "type":"one"
        },{
        "Amazon Gadget Store":[
            {url:'https://m.media-amazon.com/images/I/41aF1Kpc1iL._SY160_.jpg', name:'Smartphones'},
            {url:'https://m.media-amazon.com/images/I/316r7290SLL._SY75_.jpg', name:'Tablets'},
            {url:'https://m.media-amazon.com/images/I/31qcGgiIK7L._SY75_.jpg', name:'Laptops'},
            {url:'https://m.media-amazon.com/images/I/313zteqI9LL._SY75_.jpg', name:'TVs'}
        ],
        "type":'oneAndThree'
        }
        ]
    return(
        <main className={css.blocks} >
            {list.map((item,index)=>{
                return <MakeBlock list={item} key={index}/>
            })}
        </main>
    )
}