import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        // this is state object where you can create state for the this component
        this.state={
            count:0,
            count2:1,
        }

    }




render(){
    // here you will proceed with the props
    const {des, location} = this.props;
    const{count, count2} = this.state;
    return(

<div>
    <h1>This is class component</h1>

    <div className="mt-2 bg-slate-300 p-2">
        <h3 className="text-2xl">counter</h3>
        <h3 className="text-base">Count:{count}</h3>
        <button className="bg-orange-400 px-2 py-1 rounded-md" onClick={()=>{
            // never update your state directaly there is in-build function and methods are define for it
            this.setState({
count: this.state.count + 1,
            })
        }}>Increase Count</button>
    </div>
    <div className='mt-8'>
        <h3 className='text-lg'>Description: {des}</h3>
        <p className='font-bold text-base mt-2'>Do you want to Join Live?</p>
        <p>please reach out me on This Location: {location}</p>

    </div>
</div>)
}
}

export default UserClass;