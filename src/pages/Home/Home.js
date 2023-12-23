import "./Home.scss"
import { Header } from "../../components/Header"
import { Intro } from "../../components/Intro"
import { Compound } from "../../components/Compound"
import { WhenBuy } from "../../components/WhenBuy"
import { Biology } from "../../components/Biology"
import { DoctorQuestion } from "../../components/DoctorQuestion"
import { ToastContainer } from 'react-toastify';


export const Home = () => {
    return(
        <div className="Home">
            <Header/>
            <Intro />
            <Compound />
            <WhenBuy />
            <Biology />
            <DoctorQuestion />
            <ToastContainer />
        </div>
    )
}