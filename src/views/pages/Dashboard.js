import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import Timetable from "react-timetable-events";
import { events } from "../../events";
import Selectclass from "./dashboard/Selectclass";
import { Navigate } from "react-router-dom";
import { useContextValue } from "./shared/contextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [dept, setdept] = useState("CSE");
  const [sec, setsec] = useState("A");
  const [data, setdata] = useState(events.CSEA);
  const [{ user }] = useContextValue();

  useEffect(() => {
    const notify = () => {
      const loggedMesseage =
        "Announcement!! Welcome to PCC CS 593! I am looking forward to being your instructor for\
      the upcoming - Utpal Das ...";
      const msg = "Hey 👋, see how easy!";

      if (user) return toast.dark(loggedMesseage);
      else return toast.dark(msg);
    };
    notify();
  }, [user]);

  // const notify = <p></p>;
  const handleDeptChange = (event) => {
    setdept(event.target.value);
    const val = dept + sec;
    console.log(event.val);
    setdata(events[val]);
  };
  const handleSecChange = (event) => {
    setsec(event.target.value);
    const val = dept + sec;
    setdata(events[val]);
  };

  if (!user) {
    return <Navigate to="/login/" replace={true} state={user} />;
  }
  return (
    <>
      <div className="container" style={{ marginBottom: "3rem" }}>
        <h1 style={{ textAlign: "center" }}>Your Time Table</h1>
      </div>
      <Paper
        elevation={2}
        sx={{
          my: 3,
          p: 0,
          pl: 1,
          mx: "auto",
          width: "100%",
          maxWidth: "1300px",
        }}
      >
        <Timetable
          events={data}
          hoursInterval={{ from: 9, to: 17 }}
          renderHour={({ hour, defaultAttributes, classNames }) => {
            return (
              <div {...defaultAttributes} key={hour}>
                <span className={classNames.event_info}>{hour}</span>
              </div>
            );
          }}
          renderEvent={({ event, defaultAttributes, classNames }) => {
            return (
              <div
                style={{
                  height: defaultAttributes.style.height,
                  marginTop: defaultAttributes.style.marginTop,
                  background: "#0F8AFD",
                  borderRight: "2px solid white",
                }}
                className={defaultAttributes.className}
                title={event.name}
                key={event.id}
              >
                <span className={classNames.event_info}>{event.name}</span>
                <span className={classNames.event_info}>
                  {event.startTime.getHours() +
                    ":" +
                    event.startTime.getMinutes()}{" "}
                  -{" "}
                  {event.endTime.getHours() + ":" + event.endTime.getMinutes()}
                </span>
              </div>
            );
          }}
        />
      </Paper>
      <Selectclass
        dept={dept}
        sec={sec}
        onDeptSet={handleDeptChange}
        onSecSet={handleSecChange}
      />
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Dashboard;
