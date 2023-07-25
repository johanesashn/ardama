import VisiMisi from "./VisiMisi"
import Profile from "./Profile"
import Services from "./Services"
import Jumbotron from "./Jumbotron"
import Navbar from "./Navbar"

export default function Home(){
    return (
        <main>
            <Navbar/>
            <Jumbotron/>
            <Profile/>
            <VisiMisi/>
            <Services/>
        </main>
    )
}