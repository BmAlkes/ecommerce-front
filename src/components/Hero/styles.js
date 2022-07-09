import style from "styled-components";

const Container = style.section`
max-width:1170px;
width:100%;
margin:0 auto;
background-color: ${(props) => props.theme.colors.primaryColor};
height:668px;
display:flex;
align-items: center;
justify-content: space-between;
margin-top:90px;

.container1{
    padding-left:41px;

    h1{
        color: ${(props) => props.theme.colors.whiteColor};
        font-size: 40px;
        margin-bottom:26px;
    }
    p{
        font-size:18px;
        margin-bottom:37px;
        color: ${(props) => props.theme.colors.whiteColor};
    }
}


`;

export { Container };
