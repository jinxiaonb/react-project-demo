import { observable,action } from "mobx";
import axios from "axios";

class UserListStore {

    @observable name;
    @observable userList;

    constructor(){
        this.name = "my name is user list";
        this.userList = [];
    }

    @action
    setName(name){
        this.name = name;
    }

    @action
    async getUserList(){
        const getConfig = {method:"get", url:"/apiTest/profile"};
        const result = await axios(getConfig);
        if(result.data.code === 0){
            const userList = result.data.list;
            this.userList = userList;
        }

    }
}

export default new UserListStore();