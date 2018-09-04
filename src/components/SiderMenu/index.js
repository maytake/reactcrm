import React from 'react'
import { Layout, Menu, Icon, Button } from 'antd';
import styles from './index.less';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { connect } from 'react-redux';
import { getMenu } from '../../common/menu';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

@connect(
    state => ({
        collapsed: state.reducerCollapsed.collapsed
      
    })
)

class SiderMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    state={
        menuData:[]
    }

    renderMenu = (data,j) => {
        
        let _this=this;
        return data.map(function (item) {

             return (
                item.children&&item.children.length!==0 ? 
                <SubMenu key={item.path} title={<span>{j==='child'?'':<Icon type={item.icon} />}<span>{item.name}</span></span>}>
                    { _this.renderMenu(item.children, 'child')}
                </SubMenu>
                :<Menu.Item key={item.path}>{j==='child'?'':<Icon type={item.icon} />}<Link to={item.path}>{item.name}</Link></Menu.Item>      
             )  
 
        })
    }
    componentDidMount(){
        getMenu().then(res=>{
            this.setState({
                menuData:res
            })
        });
    }
    render() {
        
        const { collapsed} = this.props;

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
                    { this.renderMenu(this.state.menuData)}
                </Menu>
            </Sider>

        );
    }
}


export default SiderMenu;
