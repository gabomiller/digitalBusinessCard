import React from "react"
import Header from "./components/header.js"
import Info from "./components/info.js"
import About from "./components/about.js"
import Interests from "./components/interests.js"
import Footer from "./components/footer.js"
import ExtraFooter from "./components/extrafooter.js"



export default function App() {
    return (
        <div className="page">
            <Header />
            <div className="components">
                <Info />
                <About />
                <Interests />
                <Footer />
            </div>
            <ExtraFooter />
        </div>
    )
}


