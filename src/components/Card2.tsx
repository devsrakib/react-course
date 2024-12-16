import { Component } from "react";

export default class Card2 extends Component {

    constructor(props: Record<string, unknown>) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })

        if (this.state.count === 0) {
            this.setState({
                count: 0
            })
            // alert('Count cannot be less than 0')
        }
    }
    render() {
        const { count } = this.state as { count: number }
        return (
            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-white border rounded'>
                <h1 className='text-2xl text-black font-bold text-center'>{(this.props as { name: string }).name}</h1>
                <h2 className='text-2xl text-black font-bold text-center'>{count}</h2>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={this.handleIncrement}> + </button>

                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2' onClick={this.handleDecrement}> - </button>
            </div>
        )
    }
}