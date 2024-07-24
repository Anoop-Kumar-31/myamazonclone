import css from './Blocks.module.css';
export default function Make4x4Block({list}){
    const style=list[Object.keys(list)[1]];
    console.log(list[Object.keys(list)[0]][0].url);
    // console.log(list[Object.keys(list)[0]]);
    return(
        style=='oneAndThree' ? (
        <section className={css.block}>
            <h1>{Object.keys(list)[0]}</h1>
            <div class={css.oneAndThree}>
                <div class={css.singleImage}>
                    <img src={list[Object.keys(list)[0]][0].url} alt="Image 1"/>
                    <p>{list[Object.keys(list)[0]][0].name}</p>
                </div>
                <div class={css.tripleImages}>
                    <div>
                        <img src={list[Object.keys(list)[0]][1].url} alt="Image 2"/>
                        <p>{list[Object.keys(list)[0]][1].name}</p>
                    </div>
                    <div>
                        <img src={list[Object.keys(list)[0]][2].url} alt="Image 3"/>
                        <p>{list[Object.keys(list)[0]][2].name}</p>
                    </div>
                    <div>
                        <img src={list[Object.keys(list)[0]][3].url} alt="Image 4"/>
                        <p>{list[Object.keys(list)[0]][2].name}</p>
                    </div>
                </div>
            </div>
            <a href=""><p>See more</p></a>
        </section>
        ) : (
        <section className={css.block}>
            <h1>{Object.keys(list)[0]}</h1>
            <div className={css[style]}>
                {list[(Object.keys(list)[0])].map((item,index)=>(
                    <div key={index}>
                    <img src={item.url} alt="" />
                    {style=="fourXfour"?<p>{item.name}</p>:""}
                    </div>
                ))  
                }
            </div>
            <a href=""><p>See more</p></a>
        </section>
        )
    )
}