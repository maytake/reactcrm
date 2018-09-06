import React from 'react'
import {Layout, Icon} from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import SiderMenu from 'components/SiderMenu';
import GlobalHeader from 'components/GlobalHeader';
import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';
import { getBreadCrumb } from '../reducers/CRM/global';
import {saveCurrentUser, } from '../reducers/CRM/user';
import { getMenu } from '../common/menu';


const USER_TOKEN = 'USER_TOKEN';
const { Content, Header, Footer } = Layout;
const links = [{
    key: '帮助',
    title: '帮助',
    href: '',
  }, {
    key: 'github',
    title: <Icon type="github" />,
    href: 'https://github.com/ant-design/ant-design-pro',
    blankTarget: true,
  }, {
    key: '条款',
    title: '条款',
    href: '',
    blankTarget: true,
  }];
const copyright = <div>Copyright <Icon type="copyright" /> 2018 厦门盈众集团出品</div>;


const getBreadcrumbNameMap = (menuData, routerData={}) => {
    const result = {};
    const childResult = {};
    for (const i of menuData) {
        if (!routerData[i.path]) {
        result[i.path] = i;
        }
        if (i.children) {
        Object.assign(childResult, getBreadcrumbNameMap(i.children, routerData));
        }
    }
    return Object.assign({}, routerData, result, childResult);
};

@withRouter
@connect(state => ({
    currentUser:state.reducerCurrentUser.currentUser,
  }),
  {saveCurrentUser,getBreadCrumb}
)
class Admin extends React.Component{
    static childContextTypes = {
        location: PropTypes.object,
        breadcrumbNameMap: PropTypes.object,
      };
    
      state = {
        menuData:[],
      };
    
      getChildContext() {
        const { location } = this.props;
        let menuD ={};
        menuD = {
            '/user':{
                name: '用户',
                icon: 'user',
                path: 'user',
            },
            '/form':{
                name: '表单页',
                icon: 'form',
                path: 'form',
            },
            '/form/basic-form':{
                name: '基础表单',
                path: 'basic-form',
            },
            '/form/step-form':{
                name: '分步表单',
                path: 'step-form',
            }
        };
        //console.log(getBreadcrumbNameMap(this.state.menuData))
        return {
          location,
          breadcrumbNameMap: getBreadcrumbNameMap(this.state.menuData),
        };
      }
 
      
    componentDidMount() {
        
        getMenu().then(res=>{
            let data =getBreadcrumbNameMap(res);
            this.props.getBreadCrumb(data);
            this.setState({
                menuData:res
            })
        });

        
        if (!localStorage.getItem(USER_TOKEN)){
            this.props.history.push('/login');
        }
 
        this.props.saveCurrentUser();
       
    }
    render(){
       
        return (
            <Layout>
                <SiderMenu menuData={this.state.menuData}/>
                <Layout>
                    <Header style={{ padding: 0 }}>
                        <GlobalHeader/>
                    </Header>
                    <Content style={{ margin: '24px 24px 0', height: '100%' }}>
                        {this.props.children}
                    </Content>   
                    <Footer style={{ padding: 0 }}>
                        <GlobalFooter links={links} copyright={copyright} />
                    </Footer>
                </Layout>
           </Layout>   
        );
    }
}
export default connect()(Admin)