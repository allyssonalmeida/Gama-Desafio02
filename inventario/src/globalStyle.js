import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: #000;
    font-family: 'Rubik', sans-serif;
    transition: color .2s ease-in-out;
    &:hover{
      color: #58D66D;
    }
  }
  body{
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23e3dede' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23e6e6e6'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  }
  main{
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: 0 auto;
    font-family: 'Rubik', sans-serif;
  }

  section{
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px 0;
    
    & h1{
      font-size: 1.5rem;
      font-weight: 400;
      &:after{
        display: block;
        content: "";
        width: 50px;
        height: 5px;
        background: #2cdc7e;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 20px;
      }
    }

    & h2{
      font-size: 1.1rem;
      font-weight: 400;
      padding: 10px 0;
    }

    & p{
      padding: 20px 0;
      font-size: 1.2rem;
      background: #fff;
    }

    form{
      display: flex;
      flex-direction: column;
      padding: 20px 0;
      margin: 0 auto;
      background: #fff;
      border: 2px solid #000;

      & fieldset{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
        gap: 10px;
        padding: 10px;
        border: none;

        & label{
          font-weight: 500;
          font-size: 1rem;
        }
        & input, select, textarea{
          height: 35px;
          padding-left: 5px;
          font-size: 1rem;
          width: 100%;
        }
        & textarea{
          height: initial;
        }

        & button{
          padding: 10px 0;
          text-transform: uppercase;
          background: #2cdc7e;
          color: #fff;
          border: none;
          cursor: pointer;
        }

      }
      @media(max-width: 768px){
        width: 100%;
      }
      .field-group{
        display: flex;
        justify-content: space-between;
        & select{
          width: 150px;
        }

        @media(max-width: 768px){
          flex-direction: column;

          & select{
            width: 100%;
          }
        }
      }
      .button-group{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        & button{
          padding: 10px 15px;
        }
      }
    }
    .content_wrapper{
      display: flex;
      width: 100%;
      margin: 0 auto;
    }

    .content{
      display: flex;
      width: 400px;
      margin: 0 auto;

      @media(max-width: 768px){
        width: 90vw;
      }
    }
    .items_wrapper{
      width: 100%;
    }
    .lista{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;

      @media(max-width: 768px){
        justify-content: center;
      }
    }
    .lista_item{
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: space-around;
      align-items: center;
      padding: 10px;
      background: #f2f2f2;
      margin-top: 5px;
      width: 200px;
      & a{
        background: #2cdc7e;
        color: #fff;
        padding: 5px;
      }
      & span{
        display: block;
        font-size: .9rem;
        font-weight: 500;
      }
    }
    
    .alert{
      border: 2px solid #000;
      padding: 10px 15px;
      text-align: center;
      background: #fff;
      margin: 0 auto;
    }

    .novo_produto{
      display: block;
      width: 200px;
      padding: 10px 15px;
      text-align: center;
      background: #2cdc7e;
      color: #fff;
      margin-bottom: 5px;
    }
  }

  @media(max-width: 768px){
    main{
      width: 90vw;
    }
  }
`;