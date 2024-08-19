import Basket from './page';
export default function(){
    try{
        const {basketData, setBasketData}= Basket();
        return {basketData,setBasketData};
    }catch(e){
        return {basketData:[],setBasketData:()=>{}}
    }
}