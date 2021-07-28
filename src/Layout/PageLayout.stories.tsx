import React from "react";
import PageLayout from "./PageLayout";

export default {
  title: "Page Layout"
};

export const PageLayoutSidebar = () => <PageLayout.Container>
  <PageLayout.Sidebar>
    Sidebar
  </PageLayout.Sidebar>
  <PageLayout.Main>
    Main
  </PageLayout.Main>
</PageLayout.Container>
