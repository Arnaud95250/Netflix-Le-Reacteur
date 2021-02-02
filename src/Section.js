

const Section = (props) => {
    return(<>
        <div> 
            <h1>{props.title}</h1>
            <div className="row_img"> 
                {props.images.map((elem, index) => {
                    return <img src={elem} alt="" />
                })}
            </div>
        </div>  
           
        </>)
}



export default Section;