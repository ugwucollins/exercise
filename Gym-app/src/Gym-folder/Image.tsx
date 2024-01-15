import './Image.scss';

const Image = ({image}:any) => {
    return(
        <div className="Image">
            <div className="Image-div">
                <span className="Image-div-span">
                    {image}
                </span>
            </div>
        </div>
    )
}
export default Image;