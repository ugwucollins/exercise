import { useState } from 'react';
import './Image.scss';

interface Props{
    look:string[],
    main:string[]
}

const Image = ({look,main}:Props) => {
  
    const [indexsArrow, setindexsArrow]= useState(0);

 

    function handleArrows() {

        // setindexsArrow(index => {
        //     if (index === 0 ) return look.length - 1 
        //     return index - 1
        // })

        setindexsArrow(index => 
            index === 0 ? look.length - 1  :  index - 1);

        console.log('Prev');
    }
    function handleArrowsNext() {
        // setindexsArrow(index => {
        //     if (index === look.length - 1) return 0
        //     return index + 1
        // })
        setindexsArrow(index => 
            index === look.length - 1 ? 0 :  index + 1);
        console.log('Next');
    }

    return(
        < >
            {/* <div className="Image">
                <div className="Image-div" >
                    <span className="Image-div-span">
                        {image}
                    </span>
                </div>
            </div> */}
            <div style={ {position:'relative'}}> 
                <div className="slider-img" >
                    
                    {look.map((index) =>  <img src={look[indexsArrow]}
                    className='slider-img-imgs' key={index} />)}
                    
                    <button onClick={handleArrowsNext} 
                    style={{
                    padding:'10px 20px',
                    fontSize:'20px',
                    cursor:'pointer',
                    color:'white',
                    background:'gray',
                    border:'none',
                    position:'absolute',
                    right:'0px',
                    top :'250px'
                    }}>
                        <i className='bx bx-right-arrow-alt'></i>
                    </button>

                    <button 
                    onClick={handleArrows}                    
                    style={{
                        padding:'10px 20px',
                        cursor:'pointer',
                        fontSize:'20px',
                        color:'white',
                        background:'gray',
                        border:'none',
                        position:'absolute',
                        left:'0px',
                        top :'250px'
                    }}>
                    <i className='bx bx-left-arrow-alt'></i>
                    </button>

               </div>
                <span >
                    {look.map((_,index) => <button key={index} onClick={() =>
                    setindexsArrow(index)} className={indexsArrow === index?'looked':'lookedno'}>{index === indexsArrow ? <h4>Click</h4>: <h4>Click</h4>}</button>)}
                </span>
               <div className="slider-img">
                {main.map((index) =>  <span className="slider-img-imgs"
                key={index}
                >{main[indexsArrow]}</span>
                )}
               </div>
           

        </div>
                
        </>
    )
}
export default Image;