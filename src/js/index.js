// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';



const textElement=document.getElementById('text')
const buttonElement=document.getElementById('button')

const changeNewPhrase=()=>{
    const text.text
}


const allOk = data =>console.log(data);
const getPhrase = data => console.log
const printError=error=>console.log(error);

const getUsers = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers('https://api.adviceslip.com/advice');