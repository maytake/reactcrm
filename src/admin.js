import React from 'react'
import { Row,Col } from 'antd';

import { connect } from 'react-redux'
import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';
import { Icon } from 'antd';

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
  const copyright = <div>Copyright <Icon type="copyright" /> 2017 蚂蚁金服体验技术部出品</div>;


class Admin extends React.Component{

    render(){
        return (
            <Row className="container">
                <Col span="4" className="nav-left">
                    <div>菜单</div>
                </Col>
                <Col span="20" className="main">
                    
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    <GlobalFooter links={links} copyright={copyright} />
                </Col>
            </Row>
        );
    }
}
export default connect()(Admin)