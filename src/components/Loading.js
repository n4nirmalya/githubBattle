import React from 'react';
import PropType from 'prop-types';

const styles = {
    content: {
        fontSize:'35px',
        position: 'absolute',
        left:'0',
        right:'0',
        marginTop:'20px',
        textAlign: 'center'
    }
}

export default class Loading extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            content: props.text
        }
    }
    componentDidMount() {
        const {text,speed} = this.props
        this.interval = window.setInterval(() => {
            this.state.content === text + '...'
                ? this.setState({ content: text })
                : this.setState(({ content }) => ({ content: content + '.' }))
        }, speed)
    }
    componentWillUnmount(){
        window.clearInterval(this.interval)
    }
    render() {
        return (
            <div style={{height:'300px',display:'flex', justifyContent:'center', alignItems:'center',verticalAlign:'center'}}>
                <p style={styles.content}>
                    {this.state.content}
                </p>
            </div>
        )
    }
}

Loading.propTypes = {
    text: PropType.string.isRequired,
    speed: PropType.number.isRequired   
}

Loading.defaultProps = {
    text: "Loading",
    speed:300
}