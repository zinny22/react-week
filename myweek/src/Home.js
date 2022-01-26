import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const Home = (props) => {
    let navigate = useNavigate();

    const weeks =["월", "화", "수", "목", "금", "토", "일"];


    return (
        <div className="App">
          <h1 style={{
            color: "darkgreen",
            textAlign: 'center',
          }}>내 일주일은?</h1>
         
          <div>
              {weeks.map((week,index)=>{
                  const randnum = Math.floor(Math.random()*5+1);
                  return(
                    <Div>
                        <p key={index} style={{
                            paddingRight: "30px",
                            fontSize:"20px"
                        }}>{week}</p>
                        <div style={{
                            display : "flex",
                            justifyContent :"center",
                            alignItems :"center"
                        }}> 
                        <Circle index = {1} random = {randnum}/> 
                        <Circle index = {2} random = {randnum}/> 
                        <Circle index = {3} random = {randnum}/> 
                        <Circle index = {4} random = {randnum}/>
                        <Circle index = {5} random = {randnum}/>
                        </div>
                        <div><Triangle onClick={()=>{navigate(`/detail/${week}`)}}/></div>
                    </Div>
                  )
              })}
            </div>
      </div>
        )
}



const Div = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  margin: 3px auto 0px auto; 
  width: 100%;
  padding: 3px;
  border: 5px honeydew;
  border-radius: 10px;
`

const Circle = styled.div`
  width: 30px; 
  height: 30px; 
  border-radius: 30px ; 
  margin: 3px; 
  background-color: ${(p)=> p.index <= p.random ? "darkseagreen" : "#ddd" }
`;

const Triangle =styled.div`
  width: 0px;
  height: 0px;
  border-top: 20px solid transparent;
  border-left: 20px solid darkgreen;
  border-right: 20px solid none;
  border-bottom: 20px solid transparent;
  margin-left: 30px;
`

export default Home