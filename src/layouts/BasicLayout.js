import React from 'react'
import {Layout, Icon} from 'antd';
import { connect } from 'react-redux';
import SiderMenu from 'components/SiderMenu';
import GlobalHeader from 'components/GlobalHeader';
import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';
import {saveCurrentUser} from '../reducers/CRM/user';




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

@connect(state => ({
    currentUser:state.reducerCurrentUser.currentUser,
  }),
  {saveCurrentUser}
)
class Admin extends React.Component{
    componentDidMount() {
        this.props.saveCurrentUser()
    }
    render(){
        return (
            <Layout>
                <SiderMenu/>
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