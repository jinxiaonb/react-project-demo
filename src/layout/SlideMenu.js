import React, {Component} from 'react';
import { Link, withRouter }  from 'react-router-dom';

import { Menu } from "antd";
import {HomeOutlined,SettingOutlined} from '@ant-design/icons';
import routes from "./../router.config";

const { SubMenu } = Menu;

const iconEnum = {
    home:<HomeOutlined />,
    setting:<SettingOutlined />
}
//<Icon type={`${item.icon}`} />
class SlideMenu extends Component{

    renderMenuItem = (item) => (
        <Menu.Item key={`${item.path}`}>
            <Link to={item.path}>
            { item.icon ? iconEnum[item.icon]  : null }
            <span>{ item.title }</span>
            </Link>
        </Menu.Item>
    )
//<Icon type={`${item.icon}`} />
    renderMenu = (menus) => menus.map((item) => {
        // console.log(item);
        // console.log(item.children && item.children.length > 0);
        if ( item.children && item.children.length > 0 ) {
            return (
                <SubMenu 
                    key={item.path}
                    title={<span>
                        {iconEnum[item.icon]}
                        <span>{ item.title }</span>
                    </span>}
                >
                    {item.children.map(data => this.renderMenuItem(data))}
                </SubMenu>
            )
        } else {
            return this.renderMenuItem(item);
        }
    });

    render(){
        const { location } = this.props;
        const { pathname } = location;
        // console.log(pathname.split("/"));
        const paths = pathname.split("/").filter(item => !!item);
        const openKey = `/${paths.length > 0 ? paths[0] : ''}`;
        console.log("paths----"+paths);
        console.log("openKey----"+openKey);
        return (
            <div class="slide-menu">
                <Menu selectedKeys={[pathname]}
                    defaultOpenKeys={[openKey]}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={false}
                >
                    {this.renderMenu(routes)}
                </Menu>
            </div>
        )
    }
}


export default withRouter(SlideMenu);