import React from 'react';
import {Card } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
class Detail extends React.Component {
    state={
        orderId:''
    }
    componentDidMount(){
        let orderId = this.props.match.params.orderId;
        this.setState({
            orderId
        })
    }
    render() {
        return (
            <PageHeaderLayout 
                title="详细列表"
                content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"
            >
                <Card bordered={false}>
                 {this.state.orderId}
                </Card>
            </PageHeaderLayout>
        )
    }

}


export default Detail