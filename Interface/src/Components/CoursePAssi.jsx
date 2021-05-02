
import React,{Component} from 'react';
var crassignment1 = "assign1";
var crassignment2 = "assign2";
var crassignment3 = "assign3";
class AssingmentChoices extends Component{
state =
{
     value : "assign1"

}
onChange = e =>{this.setState({value:e.target.value});}


render() {
    const {value} = this.state;
    return (
        <div className = "corchoiceassi">
            <label>{crassignment1}
            <input type="radio" value="crassignment1" 
            checked={value==="crassignment1"}
            onChange={this.onChange}/>
            </label>
            <label>{crassignment2}
            <input type="radio" value="crassignment2" 
            checked={value==="crassignment2"}
            onChange={this.onChange}/>
            </label>
            <label>{crassignment3}
            <input type="radio" value="crassignment3" 
            checked={value==="crassignment3"}
            onChange={this.onChange}/>
            </label>
            {/*{value} diye çekcen value gerekince uttonda*/}

        </div>
        
    )
}

}
export default AssingmentChoices;
