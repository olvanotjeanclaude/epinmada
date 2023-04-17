import { Header, NotificationCenter, Sidebar, Workspace } from "../components";
import React, { useEffect } from "react";

import FormatTextdirectionLToRIcon from "@material-ui/icons/FormatTextdirectionLToR";
import FormatTextdirectionRToLIcon from "@material-ui/icons/FormatTextdirectionRToL";
import Hidden from "@material-ui/core/Hidden";
import SettingsIcon from "@material-ui/icons/Settings";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import classNames from "classnames";
import routes from "../routes";
import getRoutes from "../helper/getRoute";
import { useDashboard } from "../hooks/useDashboard";
import Auth from "../Auth";

const Layout = ({ history }) => {
  const { classes,
    handleDrawerToggle,
    handleNotificationToggle,
    handleFullscreenToggle,
    handleSpeedDialClose,
    handleSpeedDialOpen,
    opened,
    notificationsOpen,
    openSpeedDial,
    state, dispatch,
  }
    = useDashboard(history);

  return (
    <Auth>
      <Header
        logoAltText="Primer Admin Template"
        logo={`${process.env.PUBLIC_URL}/static/images/logo.svg`}
        toggleDrawer={handleDrawerToggle}
        toogleNotifications={handleNotificationToggle}
        toggleFullscreen={handleFullscreenToggle}
      />
      <div className={classNames(classes.panel, "theme-dark")}>
        <Sidebar
          routes={routes.items}
          opened={opened}
          toggleDrawer={handleDrawerToggle}
        />
        <Workspace opened={opened}>{getRoutes}</Workspace>
        <NotificationCenter
          notificationsOpen={notificationsOpen}
          toogleNotifications={handleNotificationToggle}
        />
      </div>

      <Hidden xsDown>
        <SpeedDial
          ariaLabel="Settings"
          className={classes.speedDial}
          icon={<SpeedDialIcon icon={<SettingsIcon />} />}
          onBlur={handleSpeedDialClose}
          onClose={handleSpeedDialClose}
          onFocus={handleSpeedDialOpen}
          onMouseEnter={handleSpeedDialOpen}
          onMouseLeave={handleSpeedDialClose}
          open={openSpeedDial}
        >
          <SpeedDialAction
            icon={<WbSunnyIcon />}
            tooltipTitle="Toggle light/dark theme"
            onClick={() => dispatch({ type: "type" })}
          />
          <SpeedDialAction
            icon={
              state.direction === "rtl" ? (
                <FormatTextdirectionLToRIcon />
              ) : (
                <FormatTextdirectionRToLIcon />
              )
            }
            tooltipTitle="Toggle LTR/RTL direction"
            onClick={() => dispatch({ type: "direction" })}
          />
        </SpeedDial>
      </Hidden>
    </Auth>
  );
};

export default Layout;
