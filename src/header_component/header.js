import React from "react"

class Header extends React.Component {
    state = {
        offset: 0
    }

    componentDidMount(){
        window.addEventListener('scroll', this.parallaxShift)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.parallaxShift)
    }

    parallaxShift = () => {
        this.setState({
            offset: window.pageYOffset
        })
    }

    render(){
        return(
            <header className="App-header" style={{ backgroundPositionY: this.state.offset }}>
                <section className="Heading-txt" style={{ bottom: this.state.offset }}>
                    <h1>Montensia Banks</h1>
                    <h2>Software Engineer</h2>
                </section>
            </header>
        )
    }
}

export default Header