let Hello=345;
const Userprofile=(props)=>{
    console.log(props)
    const {details}=props;
    const {name,age,role,image}=details
    
;    return(
            <li>
                <img src={image} alt="nature"/>
                <h1>{name}</h1>
                <p>{age}</p>
                <h1>{role}</h1>
            </li>
    )

}


export default Userprofile