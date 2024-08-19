import { checkoutContext } from './page';
export default function GetCheckOutInfo(){
    try{
        const {isCheckOut, setIsCheckOut} = checkoutContext();
        return {isCheckOut, setIsCheckOut};
    }catch(e){
        return {isCheckOut:false, setIsCheckOut:()=>{}}
    }
}