import styles from "styled-components";

const Container = styles.header`
max-width: 1170px;
width:100%;
margin:0 auto;
display:flex;
justify-content: space-between;
align-items:center;
margin-top:34px;

p{
    color :${(props) => props.theme.colors.primaryColor};
    font-weight: bold;
    font-size: 32px;
}

.listIcon{
    display:flex;
    gap:16px;
}
.listIcon li {
  width:28px;
}


`;

export { Container };
