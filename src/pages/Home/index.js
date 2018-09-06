import React from 'react';
import {Card } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
class Home extends React.Component {
    render() {
        return (
            <PageHeaderLayout
                title="基础表单"
                content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"
            >
                <Card bordered={false}>
                 {'home'}
                </Card>
            </PageHeaderLayout>
        )
    }

}


export default Home