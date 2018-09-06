import React, { PureComponent, createElement } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* import { Link } from  'react-router-dom'; */
import pathToRegexp from 'path-to-regexp';
import { Breadcrumb } from 'antd';
import classNames from 'classnames';
import styles from './index.less';
import { urlToList } from '../_utils/pathTools';

//拿到对应的关键字
export function getBreadcrumb(breadcrumbNameMap, url) {
  let breadcrumb = breadcrumbNameMap[url];
  if (!breadcrumb) {
    Object.keys(breadcrumbNameMap).forEach(item => {
      if (pathToRegexp(item).test(url)) {
        breadcrumb = breadcrumbNameMap[item];
      }
    });
  }
  return breadcrumb || {};
}

@connect(state => ({
    breadCrumbMap:state.reducerGlobal.breadCrumb,
  })
)
export default class PageHeader extends PureComponent {
  static contextTypes = {
    routes: PropTypes.array,
    params: PropTypes.object,
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  };

  state = {
    breadcrumb: null,
  };

  componentDidMount() {
    
  }
  
  /**
   * 将参数转化为面包屑
   * Convert parameters into breadcrumbs
   */
  conversionBreadcrumbList = () => {
    const {  routerLocation, breadcrumbNameMap } = this.getBreadcrumbProps();
    if (routerLocation && routerLocation.pathname) {
      return this.conversionFromLocation(routerLocation, breadcrumbNameMap);
    }
    return null;
  };

  //获取上级传过来的数据
  getBreadcrumbProps = () => {
    const { routes, params, location, breadCrumbMap } = this.props;
    const {
      routes: croutes,
      params: cparams,
      location: clocation,
      breadcrumbNameMap: cbreadcrumbNameMap,
    } = this.context;
    return {
      routes: routes || croutes,
      params: params || cparams,
      routerLocation: location || clocation,
      breadcrumbNameMap: breadCrumbMap || cbreadcrumbNameMap,
    };
  };


  // 根据参数生成面包屑
  conversionFromLocation = (routerLocation, breadcrumbNameMap) => {
    const { breadcrumbSeparator, linkElement = 'a' } = this.props;
    // Convert the url to an array
    const pathSnippets = urlToList(routerLocation.pathname);
    // Loop data mosaic routing
    const extraBreadcrumbItems = pathSnippets.map((url, index) => {
      const currentBreadcrumb = getBreadcrumb(breadcrumbNameMap, url);
      const isLinkable = index !== pathSnippets.length - 1 && currentBreadcrumb.component;
      return currentBreadcrumb.name && !currentBreadcrumb.hideInBreadcrumb ? (
        <Breadcrumb.Item key={url}>
          {createElement(
            isLinkable ? linkElement : 'span',
            { [linkElement === 'a' ? 'href' : 'to']: url },
            currentBreadcrumb.name
          )}
        </Breadcrumb.Item>
      ) : null;
    });
    // Add home breadcrumbs to your head
    extraBreadcrumbItems.unshift(
      <Breadcrumb.Item key="home">
        {createElement(
          linkElement,
          {
            [linkElement === 'a' ? 'href' : 'to']: '/',
          },
          '首页'
        )}
      </Breadcrumb.Item>
    );
    return (
      <Breadcrumb className={styles.breadcrumb} separator={breadcrumbSeparator}>
        {extraBreadcrumbItems}
      </Breadcrumb>
    );
  };




  render() {
    const breadcrumb = this.conversionBreadcrumbList();
    
    const {
      title,
      logo,
      action,
      content,
      extraContent,
      className,


    } = this.props;
    

    const clsString = classNames(styles.pageHeader, className);


    return (
      <div className={clsString}>
        {breadcrumb}
        <div className={styles.detail}>
          {logo && <div className={styles.logo}>{logo}</div>}
          <div className={styles.main}>
            <div className={styles.row}>
              {title && <h1 className={styles.title}>{title}</h1>}
              {action && <div className={styles.action}>{action}</div>}
            </div>
            <div className={styles.row}>
              {content && <div className={styles.content}>{content}</div>}
              {extraContent && <div className={styles.extraContent}>{extraContent}</div>}
            </div>
          </div>
        </div>
      
      </div>
    );
  }
}
