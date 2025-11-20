import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import EditThisPage from "@theme-original/DocItem/EditThisPage";

export default function EditThisPageWrapper(props) {
  return (
    <>
      {/* Top edit button */}
      <div style={{ marginBottom: "1rem" }}>
        <EditThisPage {...props} />
      </div>

      {/* Default bottom edit button */}
      <EditThisPage {...props} />
    </>
  );
}
