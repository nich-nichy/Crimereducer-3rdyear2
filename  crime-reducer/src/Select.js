import React from 'react';

class SelectBox1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: 'select'};
    }
    onChange(e) {
      this.setState({
        value: e.target.value
      })
    }
    render() {
      return (
        <div className="form-group">
          <label htmlFor="select1"></label><br />
          <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
            <option value="select">---- ---- ---- ----</option>
            <option value="First">Rape or attempt to rape</option>
            <option value="Second">Acid attack</option>
            <option value="Third">Harassments</option>
            <option value="Four">Outraging modesty of women</option>
            <option value="Five">Cyber based crime</option>
            <option value="Six">Harassments of married women</option>
            <option value="Seven">Dowry harassments</option>
            <option value="Eight">Other</option>
          </select>
        </div>
      )
    }
  }

  export default SelectBox1;
//   class SelectBox2 extends React.Component {
//     constructor(props) {
//       super(props);
      
//       this.state = { value: 'Select an Option'};
//     }
//     onChange(e) {
//       this.setState({
//         value: e.target.value
//       })
//     }
//     render() {
//       return (
//         <div className="form-group">
//           <label htmlFor="select2" >Select2</label>
//           <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
//           {options.map(option => {
//             return <option value={option} key={option} >{option}</option>
//           })}
//         </select>
//         </div>
        
//       )
//     }
//   }
