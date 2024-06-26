'use client'

import React, { useState, useTransition } from 'react';
import TabButton from '@/page/TabButton';
import { CG1_Open_Jobs } from './cg-g1-open-jobs/page';
import { CG1_Closed_Jobs } from './cg-g1-closed-jobs/page';
import { CG1_Strength_Report } from './cg-g1-strength-report/page';
import { CG1_Archived_Jobs } from './cg-g1-archived-jobs/page';
import Footer from '@/page/Footer';

export const CG_G1 = () => {

  const CG1_TABS = [
    {
      title: "Open Announcements",
      id: "openJobs",
      content: (<CG1_Open_Jobs />),
    },
    {
      title: "Closed Announcements",
      id: "closedJobs",
      content: (<CG1_Closed_Jobs />),
    },
    {
      title: "Archived Announcements",
      id: "archivedAnnouncements",
      content: (<CG1_Archived_Jobs />),
    },
    {
      title: "Strength Report",
      id: "strengthReport",
      content: (<CG1_Strength_Report />),
    },
  ]

  const [tab, setTab] = useState("strengthReport");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="container h-screen">
      <div className="p-4 flex flex-row justify-start">
        <TabButton
          selectTab={() => handleTabChange("strengthReport")}
          active={tab === "strengthReport"}
        >
          {" "}Strength Report{" "}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("openJobs")}
          active={tab === "openJobs"}
        >
          {/* {" "}Open Jobs{" "} */}
          <a target="_blank" href="https://www.usajobs.gov/" rel="noopener noreferrer">Open Announcements</a>
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("closedJobs")}
          active={tab === "closedJobs"}
        >
          {" "}Closed Announcements{" "}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("archivedAnnouncements")}
          active={tab === "archivedAnnouncements"}
        >
          {" "}Archived Announcements{" "}
        </TabButton>
      </div>
      <div className="row">
        {CG1_TABS.find((t) => t.id === tab).content}
      </div>
      <Footer/>
    </div>
  )
}
