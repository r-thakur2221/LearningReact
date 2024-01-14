import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
const Landing =lazy(()=>import('./Component/Landing/Landing'));
const Dashboard =lazy(()=>import('./Component/Dashboard/Dashboard'));

function ReactRouting() {
  return(
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/' element={<Suspense fallback="loading..."><Landing/></Suspense>}></Route>
          <Route path='/dashboard' element={<Suspense fallback="loading..."><Dashboard/></Suspense>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate=useNavigate();

  return <div style={{background:"black",color:"white"}}>
    I am topBar

    <button onClick={()=>{
      navigate("/");
    }}>Landing</button>
    <button onClick={()=>{
      navigate("/dashboard");
    }}>Dashboard</button>
    
  </div>
}


export default ReactRouting;
