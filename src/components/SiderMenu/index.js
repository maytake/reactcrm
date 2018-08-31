import React from 'react'
import { Layout, Menu, Icon, Button } from 'antd';
import styles from './index.less';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { connect } from 'react-redux';


const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

@connect(
    state => ({
        collapsed: state.reducerCollapsed.collapsed,
        menuData: state.reducerMenu.menu.menuData
    })
)

class SiderMenu extends React.Component {

    renderMenu = (data) => {
        return data.map(function (item) {
            return (
                item.children ?
                    <SubMenu key={item.path} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
                       {/*  { this.renderMenu(item.children)} */}
                    </SubMenu> :
                    <Menu.Item key={item.path}><Icon type={item.icon} /><Link to={'/' + item.path}>{item.name}</Link></Menu.Item>
            )
        })
    }

    render() {
        const { collapsed, menuData } = this.props;
        if (!menuData) {
            return false;
        };
        const menuTreeNode = this.renderMenu(menuData);

        this.setState({
            menuTreeNode
        })
        return (
            <Sider
                trigger={null}
                collapsible
                breakpoint="lg"
                collapsed={collapsed}
                width={256}
                className={styles.sider}
            >

                <div className={styles.logo} key="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                        <h1>CRM 后台系统</h1>
                    </Link>
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.props.collapsed}
                >
                   {/*  { this.state.menuTreeNode} */}
                </Menu>
            </Sider>

        );
    }
}


export default SiderMenu;
