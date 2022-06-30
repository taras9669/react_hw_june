/*1. Описати всю сім'ю сімпсонів (5 персонажів)

2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
https://rickandmortyapi.com/
https://rickandmortyapi.com/api/character
Створити 6 персонажів*/
import './App.css';
import SimpsonPerson from "./components/SimpsonPerson";
import RandMPerson from "./components/RandMPerson";

function App() {
    return (
        <div>
            <SimpsonPerson
                name={'Bart'}
                text={' «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.'}
                picture={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5CPQkjrbK0yVYQl0RFwBnLU99GpzDwULrs8Ri0v-eWMqe1cvzYVF15BO2OCIXhIJEVs&usqp=CAU'}
            />
            <SimpsonPerson
                name={'Homer'}
                text={'Гомер Джей Сімпсон — один із головних героїв мультсеріалу «Сімпсони». Гомер — милий та кумедний, проте іноді грубий і неввічливий батько родини. Він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.'}
                picture={'https://i.discogs.com/J4bH_-A4UcQHFSUBDyyqXbTzr7XWM8S0NfNoYgwXAiI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDAz/MTctMTMzNTcxNzQ3/Ni5wbmc.jpeg'}
            />
            <SimpsonPerson
                name={'Lisa'}
                text={'Лі́са Марі Сімпсон — персонажка анімаційного телесеріалу «Сімпсони», озвучена Ярдлі Сміт. Автор серіалу Мет Ґрейнінґ назвав героїню іменем сестри. Ліса — надзвичайно розумна восьмирічна дівчинка, один з найрозумніших у серіалі. Феміністка. Грає на саксофоні.'}
                picture={'https://sticker-collection.com/stickers/plain/lisasimpsonstickers/512/e15f98ab-4536-48d7-99aa-033e611922fffile_27719.webp'}
            />
            <SimpsonPerson
                name={'Marge'}
                text={'Марджорі Сімпсон — один з головних персонажів анімаційного серіалу Сімпсони, дружина Гомера Сімпсона, мати Ліси та Барта. Домогосподарка, майже весь свій час проводить удома доглядаючи наймолодшу дитину Меґґі, а також Барта, Лісу і чоловіка.'}
                picture={'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}
            />
            <SimpsonPerson
                name={'Meggi'}
                text={'Маргарет «Меґґі» Сімпсон — одна з головних героїв мультсеріалу Сімпсони, найменша дочка Гомера Сімпсона та Мардж Сімпсон. Протягом усіх років серіалу Меґґі не росте і завжди залишається немовлям у повзунках та підгузнику. Попри свій вік Меґґі потрапляє в різні пригоди разом зі своїм братом Бартом та сестрою Лісою. '}
                picture={'https://upload.wikimedia.org/wikipedia/uk/thumb/9/9d/Maggie_Simpson.png/220px-Maggie_Simpson.png'}
            />
            <RandMPerson
                name={'Beebo'}
                id={33}
                status={'Dead'}
                species={'Alien'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/33.jpeg'}
            />
            <RandMPerson
                name={'Ideal Jerry'}
                id={163}
                status={'Dead'}
                species={'Mythological Creature'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/163.jpeg'}
            />
            <RandMPerson
                name={'Krombopulos Michael'}
                id={196}
                status={'Dead'}
                species={'Alien'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/196.jpeg'}
            />
            <RandMPerson
                name={'Ron Benson'}
                id={301}
                status={'Alive'}
                species={'Alien'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/301.jpeg'}
            />
            <RandMPerson
                name={'Evolved Narnian Disguised as Morty'}
                id={685}
                status={'Alive'}
                species={'Humanoid'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/685.jpeg'}
            />
            <RandMPerson
                name={'Samansky'}
                id={794}
                status={'Alive'}
                species={'Alien'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/794.jpeg'}
            />
        </div>);
}

export default App;