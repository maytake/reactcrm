import React, { Fragment } from 'react';
import {Link, Route,Switch } from 'react-router-dom'
import DocumentTitle from 'react-document-title';
import { Icon } from 'antd';
import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';
import Login from '../pages/Login/Login'
import styles from './UserLayout.less';
import logo from '../assets/logo.png';
import { getPageQuery, getQueryPath } from '../utils/utils';

const links = [
  {
    key: 'help',
    title: '帮助',
    href: '',
  },
  {
    key: 'privacy',
    title: '隐私',
    href: '',
  },
  {
    key: 'terms',
    title: '条款',
    href: '',
  },
];

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2018 乐橙电子商务技术部出品
  </Fragment>
);

function getLoginPathWithRedirectPath() {
  const params = getPageQuery();
  const { redirect } = params;
  return getQueryPath('/user/login', {
    redirect,
  });
}

class UserLayout extends React.PureComponent {

  render() {
    return (
      <DocumentTitle title={'Ant Design Pro'}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <img alt="logo" className={styles.logo} src={logo} />
                  <span className={styles.title}>ENJOY AUTO</span>
                </Link>
              </div>
              <div className={styles.desc}>盈众统一会员管理系统 </div>
            </div>
            <Login/>
          </div>
          <GlobalFooter links={links} copyright={copyright} />
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
