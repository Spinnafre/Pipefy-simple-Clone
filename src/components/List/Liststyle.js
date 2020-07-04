import styled from 'styled-components';

export const Container = styled.div`
    height:100%;
    padding:0 20px;
    
    flex:0 0 320px;
    opacity:${props=>props.done ? 0.5 :1};

    & + div{
        border-left:solid 3px rgba(0,0,0,0.05);
    }
    header{

        display:flex;
        justify-content:space-between;
        align-items:center;
        height:40px;

    }
    h2{
        padding:0 15px;
        font-weight:500;
        font-size:21px;
    }
    button{

        width:35px;
        height:35px;
        background:rgba(0,0,190,1);
        border-radius:10px;
        border:0;
        cursor: pointer;
    }

    ul{
            margin-top:25px;
    }
`;
