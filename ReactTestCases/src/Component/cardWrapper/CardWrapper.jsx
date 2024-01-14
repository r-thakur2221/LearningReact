import { useState ,memo} from 'react'

function CardWrapper() {
  return(
    <div style={{display:"flex"}}>
      <Card>
        <TextComponent></TextComponent>
      </Card>
      <Card>
        <ProductComponent></ProductComponent>
      </Card>
    </div>
  )
}

function TextComponent(){
  return <div>Hi There I am text Component</div>
}

function ProductComponent(){
  return <div>I am product component</div>
}

function Card({children}){
  console.log(children);
  return (
    <div style={{border:"2px solid black", padding:"20px", margin:"20px"}}>
    {children}
  </div>
  )
  
}

export default CardWrapper;
