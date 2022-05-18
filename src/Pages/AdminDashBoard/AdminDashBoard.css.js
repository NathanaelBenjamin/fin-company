import { hover } from '@testing-library/user-event/dist/hover'
import styled from 'styled-components'

export const AdminDashBoardContainer = styled.div`
    display:flex;
    width:100%;
    // justify-content :space-around;
    background-color:white;
   

    .sideBar{
        height:100vh;
        background-color: black;
        color:white;
        width:250px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-between;
        border-radius:0px 30px 30px 0px ;
        @media screen and (max-width:768px){
            position:absolute;
            background:black;
            height:100vh;
            width:50%;
            top:0px; 
            left:${({click}) =>(click ? 0:'-100%')};
            transition:all 3s ease-in-out;
            opacity:0.93;
        }
    }
    .logOutWrapper{
        display:flex;
        justify-content:space-around;
        width:100px;
        margin-bottom:50px;
        &:hover{
            background-color:#ffc107;
            color:black;
            border-radius:5px;
            width:120px;
        }
    }
    .mobileNav{
        display:none;
        @media screen and (max-width:768px){
            display:flex;
            justify-content:space around;
            align-items:center;
            color:#ffc107;
            font-family:poppins;
            font-weight:bolder;
            font-size:30px;
            width:100%;
            height:50px;
        }
    }
    .productContainer{
        display:flex;
        justify-content:space-around;
        width:120px;
        align-items:center;
        margin-top:30px;
        transition:1.5s ease-in-out;
        &:hover{
            display:flex;
            justify-content:space-around;
            background-color:#ffc107;
            color:black;
            border-radius:5px;
            width:100px;
            margin-top:30px;
            align-items:center;
        }
    }
    .productContaineractive{
        margin-top:30px;
        background-color:#ffc107;
        color:black;
        border-radius:5px;
        width:120px;
        align-items:center;
        display:flex;
        justify-content:space-around;
    }
    .teamsContainer{
        display:flex;
        justify-content:space-around;
        width:150px;
        align-items:center;
        transition:1.5s ease-in-out;
        margin-top:30px;
        &:hover{
            background-color:#ffc107;
            color:black;
            border-radius:5px;
            width:130px;
        }
    }
    .teamsContaineractive{
        display:flex;
        justify-content:space-around;
        align-items:center;
        background-color:#ffc107;
        color:black;
        border-radius:5px;
        width:140px;
        }
    }

    .dashboardWrapper{
        display:flex;
        justify-content:space-around;
        width:150px;
        align-items:center;
        transition:0.9s ease-in-out;
        &:hover{
            background-color:#ffc107;
            color:black;
            border-radius:5px;
            width:120px;
        }
    }
    .dashboardWrapperactive{
        display:flex;
        justify-content:space-around;
        align-items:center;
        background-color:#ffc107;
        color:black;
        border-radius:5px;
        width:120px;
        }
    }
    

    .clientContainer{
        display:flex;
        justify-content:space-around;
        width:150px;
        align-items:center;
        transition:0.9s ease-in-out;
        margin-top:30px;
        &:hover{
            background-color:#ffc107;
            color:black;
            border-radius:5px;
            width:120px;
        }
    }
    .clientContaineractive{
        display:flex;
        justify-content:space-around;
        align-items:center;
        background-color:#ffc107;
        color:black;
        border-radius:5px;
        width:120px;
        }
    }
`
export  const linkStyle={
    color:"white",
    textDecoration:"none"
}