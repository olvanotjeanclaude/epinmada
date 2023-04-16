import { makeStyles } from "@material-ui/core";
import { useAppState } from "../components/AppProvider/AppProvider";
import { useState } from "react";
import { MobileBreakpoint } from "../styleVariables";
import useMountEffect from "../mountEffect";

export const useStyles = makeStyles(theme => ({
    panel: {
        position: "relative",
        overflow: "hidden",
        width: "100%",
        maxWidth: "100%",
        [theme.breakpoints.down("sm")]: {
            height: "auto",
            minHeight: "calc(100vh - 64px)",
            paddingTop: "64px"
        },
        [theme.breakpoints.down("xs")]: {
            height: "auto",
            minHeight: "calc(100vh - 56px)",
            paddingTop: "56px"
        },
        [theme.breakpoints.up("sm")]: {
            height: "calc(100vh - 64px)"
        },
        display: "flex",
        flexDirection: "row",
        flexGrow: 1
    },
    speedDial: {
        position: "absolute",
        bottom: theme.spacing(1) * 2,
        right: theme.spacing(1) * 3
    }
}));

export const useDashboard = (history) => {
    const classes = useStyles();
    const [state, dispatch] = useAppState();
    const [opened, setOpened] = useState(true);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [openSpeedDial, setOpenSpeedDial] = useState(false);

    const mediaMatcher = matchMedia(`(max-width: ${MobileBreakpoint}px)`);

    const resizeDispatch = () => {
        if (typeof Event === "function") {
            window.dispatchEvent(new Event("resize"));
        } else {
            const evt = window.document.createEvent("UIEvents");
            evt.initUIEvent("resize", true, false, window, 0);
            window.dispatchEvent(evt);
        }
    };

    const handleDrawerToggle = () => {
        setOpened(!opened);
        resizeDispatch();
    };

    const handleNotificationToggle = () =>
        setNotificationsOpen(!notificationsOpen);

    const handleFullscreenToggle = () => {
        const element = document.querySelector("#root");
        const isFullscreen =
            document.webkitIsFullScreen || document.mozFullScreen || false;

        element.requestFullScreen =
            element.requestFullScreen ||
            element.webkitRequestFullScreen ||
            element.mozRequestFullScreen ||
            function () {
                return false;
            };
        document.cancelFullScreen =
            document.cancelFullScreen ||
            document.webkitCancelFullScreen ||
            document.mozCancelFullScreen ||
            function () {
                return false;
            };
        isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
    };

    const handleSpeedDialOpen = () => setOpenSpeedDial(true);

    const handleSpeedDialClose = () => setOpenSpeedDial(false);

    useMountEffect(() => {
        if (mediaMatcher.matches) setOpened(false);
        mediaMatcher.addListener(match => {
            setTimeout(() => {
                if (match.matches) setOpened(false);
                else setOpened(true);
            }, 300);
        });

        const unlisten = history.listen(() => {
            if (mediaMatcher.matches) setOpened(false);
            document.querySelector("#root > div > main").scrollTop = 0;
        });

        return () => {
            unlisten();
            mediaMatcher.removeListener(match => {
                setTimeout(() => {
                    if (match.matches) setOpened(false);
                    else setOpened(true);
                }, 300);
            });
        };
    });

    return {
        classes,
        handleDrawerToggle,
        handleNotificationToggle,
        handleFullscreenToggle,
        opened,
        notificationsOpen,
        openSpeedDial,
        state,dispatch,
        handleSpeedDialClose,
        handleSpeedDialOpen
    };
}