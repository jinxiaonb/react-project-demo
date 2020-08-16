import React from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from "antd";
import {inject, observer} from "mobx-react";

@inject("UserListStore")
@observer
class UserListPage extends React.Component {

    push = ()=>{
        this.props.history.push("/user/add?name=231");
    }

    setName = ()=>{
        const { UserListStore } = this.props;
        UserListStore.setName("hhhhhhh");
    }

    componentDidMount(){
        const {UserListStore} = this.props;
        UserListStore.getUserList();
    }

    render(){
        const {UserListStore} = this.props;
        // console.log(this.props);
        // console.log(UserListStore);
        // console.log(UserListStore.userList);
        return (
            <div>
                <p>UserListPage</p>
                <p>组件：{ UserListStore.name }</p>
                <Button onClick={this.setName}>添加用户</Button>
                <div>
                    {
                        UserListStore.userList.map((item,index)=><p key={index}>{item.id}->{item.user_id}->{item.user_name}</p>)
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(UserListPage);