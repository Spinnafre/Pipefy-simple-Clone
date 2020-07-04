import styled,{css} from 'styled-components';

export const Container = styled.div`
  position:relative;
  background-color:white;
  padding:25px;
  border-radius:5px;
  margin-bottom:15px;
  border-top:solid 20px rgba(230,236,245,0.5);
  box-shadow:0px 1px 6px 0px rgba(190,200,230,0.8);
  cursor: grab;

  header{
    position:absolute;
    top:-22px;
    left:15px;
    
  }
  header span{
    margin:0px 3px 0px 0px;
  }
  input{
    height:90px;
    width:100%;
    font-weight:600;
    line-height:30px;
    border:none;
    text-align:center;

    /* padding-right:15px; */
    margin-right:15px;
  }
  img{
      width:24px;
      height:24px;
      border-radius:5px;
      border-top:5px;
  }

  ${props => props.isDragging && css`
    border:2px dashed rgba(0,0,200,0.5);
    padding-top:32px;
    box-shadow:none;
    border-radius:none;
    background:transparent;
    cursor: grabbing;

    input , img , header{
      opacity:0;
    }

  `}
`;
export const Label =styled.span`
  width:13px;
  height:13px;
  
  background-color:${props=>props.color};
  border-radius:3px;

`