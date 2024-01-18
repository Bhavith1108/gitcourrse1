let a=10;
let b=20;
let Hello=345;
let bing="Hey"
const Userprofile=(props)=>{
    console.log(props)
    const {details}=props;
    const {name,age,role,image}=details
    console.log(name,age,role,image)
    
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