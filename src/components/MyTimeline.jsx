import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";

const MyTimeline = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          className="dark:text-teal-600"
        >
          06/02/2005
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <ChildCareIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            DOB
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          className="dark:text-teal-600"
        >
          2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Utkarmit Middle School,Dumka
          </Typography>
          <Typography className="dark:text-teal-400">
            Graduated from high school with 76%
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          className="dark:text-teal-600"
        >
          2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            M.G Inter College
          </Typography>
          <Typography className="dark:text-teal-400">
            Graduated from senior secondary high school
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          className="dark:text-teal-600"
        >
          2021-2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Dumka Engineering College
          </Typography>
          <Typography className="dark:text-teal-400">
            Currently in 6th semester, pursuing B.Tech in Computer Science and
            Engineering
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          className="dark:text-teal-600"
        >
          Jun 2023 - August 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <GitHubIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Social Summer of Code 2023
          </Typography>
          <Typography className="dark:text-teal-400">
            Participated in SSoC 2023, contributing to develop complex projects
            and learn new technologies with some of the brightest minds as
            mentors and co-participants. Top contributor with PRs successfully
            merged.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          className="dark:text-teal-600"
        >
          Aug 2023 - Sep 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            CodeClause-Internship
          </Typography>
          <Typography className="dark:text-teal-400">
            During my internship at CodeClause, I had the opportunity to work on
            a dynamic web development project that involved creating a to-do
            website and a personal portfolio. Leveraging my skills in HTML, CSS,
            and JavaScript, I developed a user-friendly to-do application that
            allows users to efficiently manage their tasks with features such as
            adding, deleting, and marking tasks as complete.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          className="dark:text-teal-600"
        >
          Nov 2023 - Feb 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <GitHubIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Social Winter of Code 2024
          </Typography>
          <Typography className="dark:text-teal-400">
            Participated in SWoC 2024, contributing to develop complex projects
            and learn new technologies with some of the brightest minds as
            mentors and co-participants. Top contributor with PRs successfully
            merged.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default MyTimeline;
