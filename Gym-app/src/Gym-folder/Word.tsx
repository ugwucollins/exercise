import './Image.scss';
const Word = ({para,name,work}:any) => {
    return(
        <div className="Word">
            <p className="Word-p">
                {para}
              
            </p>
            <span className="Word-span">
                <p className="Word-span-p"> {name} -</p> &nbsp;
                <p className="Word-span-p2">  {work}</p>
            </span>
        </div>
    )
}
export default Word;