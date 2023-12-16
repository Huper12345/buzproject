import "./Home.scss"
import { Header } from "../../components/Header"
import { Intro } from "../../components/Intro"
import { Compound } from "../../components/Compound"


export const Home = () => {
    return(
        <div className="Home">
            <Header/>
            <Intro />
            <Compound />
        </div>
    )
}