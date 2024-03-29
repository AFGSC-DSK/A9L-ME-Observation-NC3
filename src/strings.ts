import { ContextInfo } from "gd-sprest-bs";

// Sets the context information
// This is for SPFx or Teams solutions
export const setContext = (context, sourceUrl?: string) => {
    // Set the context
    ContextInfo.setPageContext(context.pageContext);

    // Update the source url
    Strings.SourceUrl = sourceUrl || ContextInfo.webServerRelativeUrl;
}

/**
 * Global Constants
 */
const Strings = {
    AppElementId: "a9l_obv_rpt",
    GlobalVariable: "a9l_obv_rpt",
    Lists: {
        Main: "NC3 Hardening Ops Analysis Dashboard",
        Contacts: "Recipients"
    },
    ProjectName: "NC3 Hardening Ops Analysis Dashboard",
    ProjectDescription: "Created using the gd-sprest-bs library.",
    ObservationReportConfig: ContextInfo.webServerRelativeUrl + "/SiteAssets/A9L-ME-Observation-NC3/obvrpt-config.json",
    SolutionUrl: "/sites/dev/siteassets/sp-dashboard/index.html",
    SourceUrl: ContextInfo.webServerRelativeUrl,
    Version: "1.0"
};
export default Strings;