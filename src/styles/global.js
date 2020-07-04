import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;

    }
    body,html,#root{
        height:100%;
    }
    body{
        font: 14px 'Roboto','Arial';
        background-color:rgba(130,130,130,0.1);
        color:#333;
        -webkit-font-smoothing:antialiased !important;
    }
    ul{
        list-style:nome;
    }
`;

