import React,{Component} from 'react';

var crassignment1 = "Assignment 1";
var crassignment2 = "Assignment 2";
var crassignment3 = "Assignment 3";

class AssingmentChoices extends Component{
    state =
    {
         value : "assign1"

    }  
    onChange = e =>{this.setState({value:e.target.value});}

    render() {
        const {value} = this.state;
        return (
            <div className = "choiceassi">
                <table>
                    <tr>
                        <td><label className="assign-name">{crassignment1}</label></td>
                        <td><input type="radio" value="crassignment1" checked={value==="crassignment1"} onChange={this.onChange}/></td>
                    </tr>
                    <tr>
                        <td><label className="assign-name">{crassignment2}</label></td>
                        <td><input type="radio" value="crassignment2" checked={value==="crassignment2"} onChange={this.onChange}/></td>
                    </tr>
                    <tr>
                        <td><label className="assign-name">{crassignment3}</label></td>
                        <td><input type="radio" value="crassignment3" checked={value==="crassignment3"} onChange={this.onChange}/></td>
                    </tr>
                </table>
            <br></br>
            <button>Request Extension</button> 
            </div>   
        )
    }
}
export default AssingmentChoices;
