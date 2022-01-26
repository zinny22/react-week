import React from "react";
import styled from "styled-components";
import { useNavigate,useParams} from "react-router-dom";
import styles from './Detail.module.css';


const Detail = (props) =>{
    const { week } = useParams();
    const navigate = useNavigate();
    

    function onclick(e){
        const index1 = e.target.id
        for(let i =1; i<=5; i++){
            const temp = document.getElementById(i)
            if (i <= index1){
                temp.classList.add(styles.test);
            } else {
                if(temp.classList.contains(styles.test)){
                    temp.classList.remove(styles.test)
                }
            }
        }

    }

    return (
        <div>
        <h1  style={{
            color: 'darkgreen',
            textAlign: 'center',
          }}><span style={{
              backgroundColor :"honeydew",
              padding: "5px",
              borderRadius:"50px",
          }}>{week}요일</span> 평점 남기기</h1> 
          <Line/>
            <Div> 
                <div onClick={onclick} id ="1" className={styles.circle}></div>
                <div onClick={onclick} id ="2" className={styles.circle}></div>
                <div onClick={onclick} id ="3" className={styles.circle}></div>
                <div onClick={onclick} id ="4" className={styles.circle}></div>
                <div onClick={onclick} id ="5" className={styles.circle}></div>
            </Div>
            <Btn onClick={()=>{navigate("/")}}>평점남기기</Btn>
        </div>
    );
}


const Div = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  margin: 1rem 0px; 
  width: 100%;
`

const Line = styled.hr`
margin: 16px 0px;
border: 1px dotted darkseagreen;
`;

const Btn = styled.button`
    display: flex;
    border: 1px darkgreen;
    padding: 10px;
    min-width: vw;
    background-color: darkgreen;
    color: white;
    border-radius: 10px;
    display: block;
    margin: auto;
`

export default Detail;