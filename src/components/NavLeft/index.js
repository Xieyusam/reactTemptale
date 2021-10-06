import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.less";
import { Menu } from "antd";
// import {
//   AppstoreOutlined,
//   MailOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
import { menuRoute } from "../../router/route";
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class NavLeft extends Component {
  handleClick = (e) => {
    console.log("click ", e);
  };
  renderMenu = (menuRoute) => {
    console.log(1)
    return menuRoute.filter((item) => item.menuShow).map((parent) => {
      // 二级菜单
      if (parent.childdren && parent.childdren.length > 0) {
        return (
          <SubMenu title={parent.label} key={parent.path}>
            {parent.childdren
              .filter((item) => item.menuShow)
              .map((child) => {
                return this.renderMenuItem(child);
              })}
          </SubMenu>
        );
      } else {
        //只有一级菜单
        return this.renderMenuItem(parent);
      }
    });
  };

  renderMenuItem = (item) => {
    return (
      <MenuItem title={item.label} key={item.path}>
        {item.layout === "admin" ? (
          <NavLink to={item.path}>{item.label}</NavLink>
        ) : (
          <NavLink to={"/" + item.layout + item.path}>{item.label}</NavLink>
        )}
      </MenuItem>
    );
  };

  render() {
    return (
      <div className="NavLeft">
        <div className="title">后台管理系统模版</div>
        <Menu defaultSelectedKeys="/home" forceSubMenuRender={true} onClick={this.handleClick} mode="inline" theme="dark">
          {this.renderMenu(menuRoute)}
        </Menu>
      </div>
    );
  }
}

export default NavLeft;
