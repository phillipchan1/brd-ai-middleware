BRD – Business Requirements Document for &lt;Project&gt;

|                                                   |
| ------------------------------------------------- |
| \[Enter Project Name\]                            |
| \[Enter Project ID from UMT360 or Other Tracker\] |
| Status                                            |
| \[Draft, Final, Revision\]                        |
| Version                                           |
| .1 (Draft)                                        |
| Date of the Document                              |
| \[Month/Day/Year\]                                |
|                                                   |
| Prepared by:                                      |
| \[Author(s)\]                                     |

Contents

[1 Project Overview & High-Level Requirements 5](#_Toc140479114)

[1.1 Project Background 5](#_Toc140479115)

[1.2 Objectives 5](#_Toc140479116)

[1.2.1 Capabilities 5](#_Toc140479117)

[1.2.2 Success Criteria 5](#_Toc140479118)

[1.3 Overview 5](#_Toc140479119)

[1.3.1 Sponsorship and Stakeholders 5](#_Toc140479120)

[1.3.2 “As Is” Business Process Model 6](#_Toc140479121)

[1.3.3 High-Level “To Be” Business Process Model 6](#_Toc140479122)

[1.3.4 Scope 6](#_Toc140479123)

[1.3.5 Users and Devices 6](#_Toc140479124)

[1.4 Approvals 7](#_Toc140479125)

[2 Detailed Project Description 8](#_Toc140479126)

[2.1 To-Be Business Process Model 8](#_Toc140479127)

[2.2 User Journeys 8](#_Toc140479128)

[2.3 Detailed User Type Characteristics 9](#_Toc140479129)

[2.4 Business Constraints 10](#_Toc140479130)

[2.5 Business User Environment 10](#_Toc140479131)

[2.6 Business Assumptions and Dependencies 10](#_Toc140479132)

[3 User Stories/Features 11](#_Toc140479133)

[3.1 User Story / US-001 11](#_Toc140479134)

[3.2 User Story / US-002 11](#_Toc140479135)

[3.3 User Story / US-003 11](#_Toc140479136)

[3.4 User Story / US-004 11](#_Toc140479137)

[3.5 User Story / US-005 11](#_Toc140479138)

[4 Specific Requirements 12](#_Toc140479139)

[4.1 Functional Requirements 12](#_Toc140479140)

[4.2 Performance Requirements 12](#_Toc140479141)

[4.3 User Acceptance Expectations 12](#_Toc140479142)

[5 Reference 13](#_Toc140479143)

[5.1 Definitions, Abbreviations & Acronyms 13](#_Toc140479144)

[5.2 Business Policies & Rules 13](#_Toc140479145)

[5.2.1 Business Policies 13](#_Toc140479146)

[5.2.2 Business Rules 13](#_Toc140479147)

[5.3 Other References 13](#_Toc140479148)

[6 Approvals 14](#_Toc140479149)

Document Information

| **Prepared By** | Author using template to create document                               |
| --------------- | ---------------------------------------------------------------------- |
| **Title**       | BRD – Business Requirements Document for &lt;Project&gt;               |
| **Reviewed By** | Name of approving authority (Project Mgr, Solution Delivery Mgr, etc.) |
| **Review Date** | Date reviewed and approved by approving authority                      |
| **Octane Link** | Link to applicable epic in Octane                                      |

Document Version History

| **Version <br>Number** | **Version <br>Date** | **Revised By** | **Description**                                 |
| ---------------------- | -------------------- | -------------- | ----------------------------------------------- |
| 1.0                    | 20200101             | Peter Gergis   | Initial version of document                     |
| 1.1                    | 20230717             | Dane Parker    | Updated title page to include key document info |
|                        |                      |                |                                                 |
|                        |                      |                |                                                 |

Template Overview

This document template is designed to facilitate the process of recording business requirements derived from project sponsor and stakeholders, and system users.

&lt;Italicized text in angle brackets, like this, provides instructions to the template user. It should be removed and, where appropriate, be replaced with the requested content.&gt;

In select places, the template provides text for the document. This text should be augmented, expanded, and edited as appropriate.

Additionally, this document is both a template as well as a set of instructions. It should be noted that business requirements and the associated processes can be used as input into automated data capture tools such as Micro Focus ALM Octane, UMT360 and Micro Focus ALM (Application Lifecycle Management). Where applicable, this template will provide specific instructions on how to input data into these tools. However, Section 1 of this document is always required, regardless of automated data capture tool(s) used to supplement. _NOTE: Section 1 of this document, should be appropriately maintained and updated to ensure that Section 2 details (process, requirements, user types, constraints, and dependencies) directly tie back to the project capabilities, success criteria, stakeholder definitions, and scope._

Instructions related to these tools are informative and will be called out using the following form:

**_Examples:_**

**Octane:** _In the ALM Octane banner, click the menu button and select Dashboard or select the Overview tab in the Backlog/Quality modules._

**UMT360:** _Go to Project Online and add a Content Editor web part to each PDP that does not require a mapping with UMT360 Forms._

The business requirements in this document are captured at two points during the System/Software Development Lifecycle (SDLC). Initially section one of this document a) should be completed as the customer initially describes his/her need and b) becomes the foundation for the ROM Estimate required for the IT Op Plan Governance Gate. The subsequent sections of this document should be completed during Solution Analysis and will form the basis for the more formalized requirements, design traceability and Step 2/Solution Implementation funding. It is recommended that you become familiar with the [SDLC Integrated Workstream](https://edisonintl.sharepoint.com/:b:/r/teams/itprocess/Guidelines/SDLC%20Integrated%20Workstream.pdf?csf=1&e=7fHG4G) and [SDLC Core Document Tree by Function](https://edisonintl.sharepoint.com/:u:/r/teams/itprocess/Guidelines/SDLC%20Core%20Document%20Tree%20by%20Function.vsdx?d=w944f1314d9b7400196108445087bd139&csf=1&e=Okx2l8) diagrams.

# Project Overview & High-Level Requirements

## Project Background

<This section briefly describes the background of the project, including problem statement and primary business drivers. If appropriate, reference other documents where these items are included and provide link if available.

The following information should be provided in this section, as it becomes available.

If Octane is also being used, a link to this BRD document should be included in Octane.>

**Octane:** The Project Background section equates to the Epic Description in Octane.

**_Note:_** _Octane supports linked and embedded documents, which may also contain this information._

General Project Information

- **Project Identifier:** \_&lt;The project title and UMT360 or other ID – If not already done, create UMT360 project now.&gt;  
   \_Respond here…
- **Project Approval Status:** \_&lt;For example: Standard project approvals required. Is the project already on the IT Op Plan? Was it included in an approved GRC?&gt;  
   \_Respond here…
- **Funding Status:** \_&lt;Has the money been allocated or is the money being requested?&gt;  
   \_Respond here…
- **Project Classification:** \_&lt;Is this upgrade? A Refresh? A new capability?&gt;  
   \_Respond here…
- **Previous Efforts:** \_&lt;Are there previous versions or releases?&gt;  
   \_Respond here…
- **Key Resources:** See standard resource list [SDLC Deliverables RACI](https://edisonintl.sharepoint.com/:x:/r/teams/itprocess/Guidelines/SDLC%20Deliverables%20RACI.xlsx?d=w15af660ab5e74dad8512814afd56d369&csf=1&e=wxQF3f). &lt;Note any exceptions/additions.&gt;  
   Respond here…
- **Anticipated Project Methodology/Approach:** \_&lt;Note here whether the OU Portfolio anticipates the project to be completed using Agile, Waterfall, Hybrid or Systems Engineering (CSRP, Grid Mod, etc.) as its methodology/approach.&gt;  
   \_Respond here…

## Objectives

### Capabilities

&lt;This section contains a general discussion of the proposed functionality being requested to provide a foundation for understanding the capabilities needed. Narrative should be written using common business and user language.&gt;

**Octane:** The Capabilities section equates to the Epic Description in Octane.

**_Note:_** _Octane supports linked and embedded documents, which may also contain this information._

### Success Criteria

<These are measures stated from the customer/user point of view and likely sourced from the OU’s business case. They are the key indicators (as assessed by all significant stakeholders) denoting success of the delivered system, services and/or processes. While independent of any particular solution, the success of a solution is assessed against them.

Success criteria are **used to**:

- Compare alternatives
- Define operational requirements values
- Evaluate achievement of key operational performance
- Serve as standard of acceptance for technical solution>

**Octane:** The Success Criteria is captured at the Feature level, so would not be captured at this time in Octane.

Respond here…

## Overview

### Sponsorship and Stakeholders

&lt;After creating Stakeholder Analysis in project repository, insert link to artifact here.&gt;

**Octane:** If using UMT360 for project repository, insert link in Octane to Stakeholder Analysis. If using Octane for project repository, Stakeholder Analysis should already be embedded in Epic.

Insert link to completed Stakeholder Analysis spreadsheet (link to [template](https://edisonintl.sharepoint.com/:x:/r/teams/itprocess/Process%20Templates%20%20Doc%20Library/Stakeholder%20Analysis%20-%20Template.xlsx?d=wcee1b4bee3fc49678385e9e52516c3d1&csf=1&web=1&e=SSO76M)).

### “As Is” Business Process Model

&lt;Insert a description of the business process (purpose, scope, outcomes/deliverables, activities, roles/RACI, etc.) and diagram with sufficient detail to understand the areas to be changed by the project. The business process model, with description and diagram, may be an attachment.&gt;

Respond here…

### High-Level “To Be” Business Process Model

&lt;Insert high-level “To Be” business process diagram that captures anticipated changes/impacts to “As Is” diagram. The high-level “To Be” diagram may be an attachment. This initial “To Be” diagram will be updated and fully detailed in later sections of this document.&gt;

Respond here…

### Scope

<This section defines the scope of the system as initially envisioned (an important step for controlling scope creep). Scope can be expressed in terms of overall capabilities provided by the system, requested changes to an existing system and/or boundaries of the request. Scope should be described in this section in terms of initiatives and epics. Features/user stories will be defined later in Section 2.

Initiative: Collection of epics that drive toward a common goal.

Epic: An Epic is a container for a significant Solution development initiative that captures the more substantial investments that occur within a project or portfolio. Due to their considerable scope and impact, epics require the definition of a Minimum Viable Product (MVP).

Features/User Stories: Short requirements or requests written from the perspective of the user. These are capture in Sections 2+.>

**Octane:** If using Octane, capture Epic information there instead of below.

Epics

| **Epic Name**       | **Description** |
| ------------------- | --------------- |
| **&lt;Epic #1&gt;** |                 |
| **&lt;Epic #2&gt;** |                 |
| **&lt;Etc.&gt;**    |                 |

### Users and Devices

<The users/devices should be defined in terms of roles or positions. Characteristics that would impact system design (user proficiency, geography, environment and any other notable limitations or expectations) should be capture for each user/device.

**Octane:** If using Octane, is captured at the Feature or User Story level, so would not be captured at this time in Octane.

User Types & Characteristics

| **User Type/Persona**     | **Key User Characteristics**                                                                                                                                          |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **_Ex.: Senior Planner_** | _Works from home office using laptop with dual monitors over VPN. User is proficient with Drafting (AUD), Planning (Design Manager), EAM (SAP) and Microsoft Office._ |
| **&lt;User Type #1&gt;**  |                                                                                                                                                                       |
| **&lt;User Type #2&gt;**  |                                                                                                                                                                       |
| **&lt;Etc.&gt;**          |                                                                                                                                                                       |

Device Types & Characteristics

| **Device Type**                | **Key Device Characteristics**                                                                            |
| ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| **_Ex.: Pole-Mounted Router_** | _Affixed to wood, composite, or light-weight steel poles in the field, exposed to all weather conditions_ |
| **&lt; Device Type #1&gt;**    |                                                                                                           |
| **&lt; Device Type #2&gt;**    |                                                                                                           |
| **&lt;Etc.&gt;**               |                                                                                                           |

## Approvals

<This section contains the signatures of the approvers of this document. By signing, they are accepting the validity and accuracy of the information contained in the document. Additionally, they are accepting the requirements contained within the document as the basis for system requirements definition and analysis.

Acceptance also indicates that all signing parties agree that the documented requirements will be used as one of the project’s criteria for measurable success.

The approvers of the requirements must include all stakeholders including Business Process Owner(s), IT Project Manager/Solution Delivery Manager, Solution Delivery Senior Manager, and other applicable managers. For example, if there is a requirement to modify an existing system interface the managers of both interfacing systems must approve these requirements. If the specification contains constraints that potentially will have an impact on the information technology infrastructure, then the requirements must also be approved by a representative from IT Infrastructure.

The document will also be signed by the business analysts who prepared the document. Their signature implies that the document is ready for approval.>

**Octane:** Approvals are captured electronically within Octane.

Approvals

This section captures names of those selected to approve the content of Section 1 of this document. By approving via logged communication (email, chat, e-signature, etc.), Approvers are confirming the validity and accuracy of the information contained in the document.

**OU Representative** – _Insert Name Here –_ (_Insert Date of Approval Here_)

**OU Representative** – _Insert Name Here –_ (_Insert Date of Approval Here_)

**OU Representative** – _Insert Name Here –_ (_Insert Date of Approval Here_)

**Business Process Owner** – _Insert Name Here or N/A –_ (_Insert Date of Approval Here_)

**Business Product Owner** – _Insert Name Here –_ (_Insert Date of Approval Here_)

**IT Delivery/Product Manager** – _Insert Name Here or N/A –_ (_Insert Date of Approval Here_)

# Detailed Project Description

## To-Be Business Process Model

<Insert an updated “To Be” description (purpose, scope, outcomes/deliverables, activities, roles/RACI, etc.) and diagram of the business process with sufficient detail to support solution design activities. The final “To Be” process model, with description and diagram, may be an attachment.>

Respond here…

## User Journeys

&lt;For each User Type/Persona, use one or more rows to describe associated user journey(s), eventually deleting example to save space. The As-Is and To-Be process models are key to success and, therefore, must be available to support this effort.&gt;

User Journey Map

| **Scenario to Be Addressed**                                                             | **User Type/ Persona** | **What is the user thinking or feeling?**                                                                                                                                                                                                                                                                              | **What is the user’s action?**                                                                                                                                                                                                                                                                                                  | **What do we want to change about this scenario?**                                                                                                                                                                                                                                                                                                                                                      | **_Why do we need this change?_**                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Following planning meeting, review and update planning data to match meeting outcomes._ | _Ex.: Finance SME_     | _\- I need the planning system to be available when I work late (6am-10pm, Monday-Friday)._<br><br>_\- I need to enter this data accurately and quickly._<br><br>_\- I need to be able to see the results in reports right after._<br><br>_\- I need to be sure I won’t lose any of my changes while I’m making them._ | _\- User logs on to work network._<br><br>_\- User launches planning tool._<br><br>_\- User accesses project of interest._<br><br>_\- User reviews data, as needed._<br><br>_\- User makes changes to data, as needed._<br><br>_\- User reviews impacted reports to confirm data entered is impacting the plan as anticipated._ | _\- No more system outages during working hours (6am-10pm, Monday-Friday)._<br><br>_\- Data entered must be backed up in real time (not nightly, as it is now)_<br><br>_\- Should be able to search for projects based on any data type (name, start date, assigned resources, etc.), plus a keyword search for all data fields; any mix of data types + keyword(s) should be simultaneously supported_ | _\- Users working late to meet deadlines need system access_<br><br>_\- Users have lost data entered during a given day and it has not been apparent until after meeting notes are gone_<br><br>_\- Users spend a lot of time searching for the project of interest_ |
|                                                                                          |                        |                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                      |
|                                                                                          |                        |                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                      |

## Detailed User Type Characteristics

&lt;Complete table below to provide additional details about user types, eventually deleting example to save space. Italicized/red column headings should be adjusted for specific project needs/activities. The “As Is” (see Section 1) and “To Be” (see AVD) process models are key to success and, therefore, must be available to support this effort.&gt;

| **User Type**      | **Tasks**                                                                                                                                                                                                   | **Frequency**                | **_Review Financial Data_** | **_Update Plnng Data_** | **_Perform Calcs_** | **_Review Results_** | **_Publish Results_** | **_Update Calcs & Reports_** | **_Approve Budget or Outlook_** | **_Approve Calc or Report Changes_** | **_Approve User Access_** | **_Inert Title Here_** | **_Inert Title Here_** | **_Inert Title Here_** |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------- | ----------------------- | ------------------- | -------------------- | --------------------- | ---------------------------- | ------------------------------- | ------------------------------------ | ------------------------- | ---------------------- | ---------------------- | ---------------------- |
| _Ex.: Finance SME_ | _Update and manipulate planning data; perform calculations and review results; run reports to summarize and handoff planning data to other finance stakeholders; update calculations and reports as needed_ | _Multiple Times per Session_ | _Y_                         | _Y_                     | _Y_                 | _Y_                  | _Y_                   | _Y_                          | _Y_                             | _N_                                  | _N_                       | _?_                    | _?_                    | _?_                    |
|                    |                                                                                                                                                                                                             |                              |                             |                         |                     |                      |                       |                              |                                 |                                      |                           |                        |                        |                        |
|                    |                                                                                                                                                                                                             |                              |                             |                         |                     |                      |                       |                              |                                 |                                      |                           |                        |                        |                        |

## Business Constraints

&lt;Constraints to be considered include regulatory restrictions, budget constraints, operational availability, accuracy, time synchronization and other constraints from users’ perspectives, etc.&gt;

Business Constraints & Descriptions

| **Business Constraint**   | **Description** |
| ------------------------- | --------------- |
| **&lt;Constraint #1&gt;** |                 |
| **&lt;Constraint #2&gt;** |                 |
| **&lt;Etc.&gt;**          |                 |

## Business User Environment

&lt;Describe the operating parameters and conditions that the proposed solution must operate under, and how the proposed solution interacts with the existing and external systems. Also describe any special consideration as it relates to the operating environment and the expected physical environment in which the solution will be deployed.&gt;

Respond here…

## Business Assumptions and Dependencies

&lt;Describe the assumptions and conditions upon which the requirements depend. Describe the transition and future state that’s expected to be present when the solution is deployed.&gt;

Respond here…

# User Stories/Features

<A [user story](https://www.romanpichler.com/blog/10-tips-writing-good-user-stories/) is a short, simple description of a feature told from the perspective of the person who desires the new capability, usually a user or stakeholder of the system. They typically follow a simple template: As a &lt;type of user&gt;, I want &lt;some goal&gt; so that &lt;some reason&gt;.

Example: As a user, I can back up my entire hard drive so that I can recover from any data loss.

Example: As a power user, I can specify files or folders to back up based on file size, date created and date modified, so that I only back up important data and don’t waste backup space.>

| **ID**  | **User Type** | **I Want…**                                                                                   | **So that…**                                               |
| ------- | ------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| **Ex.** | Standard User | To back up my entire hard drive                                                               | I can recover from any data loss                           |
| **Ex.** | Power User    | To specify files and/or folders to back up based on file size, data created and date modified | I only back up important data and don’t waste backup space |
| **1**   |               |                                                                                               |                                                            |
| **2**   |               |                                                                                               |                                                            |
| **3**   |               |                                                                                               |                                                            |

**_AND/OR_**

## User Story / US-001

Respond here…

## User Story / US-002

Respond here…

## User Story / US-003

Respond here…

## User Story / US-004

Respond here…

## User Story / US-005

Respond here…

# Specific Requirements

## Functional Requirements

<Describe below any additional functional requirements not previously captured in User Stories section above. Descriptions of these capabilities shall be clear, distinct and not convey design.>

| **BR ID** | **Description** | **Level of Need <br>**(Low/Med/High) |
| --------- | --------------- | ------------------------------------ |
| BR-001    |                 |                                      |
| BR-002    |                 |                                      |
| BR-003    |                 |                                      |

**_Note:_** _If any functional requirements would result in an impact to a_ [_Critical Business Record_](https://edisonintl.sharepoint.com/teams/EC1/OpComp/CPMO/PMO/CBR)_, the_ **_OU Rep_** _for the project should ensure any appropriate changes are implemented in a timely manner._

## Performance Requirements

&lt;Describe below any additional performance requirements not previously captured in User Stories section above. Descriptions of these capabilities shall be clear, distinct and not convey design.&gt;

| **BR ID** | **Description** | **Level of Need <br>**(Low/Med/High) |
| --------- | --------------- | ------------------------------------ |
| BR-xxx    |                 |                                      |
| BR-xxx    |                 |                                      |
| BR-xxx    |                 |                                      |

## User Acceptance Expectations

&lt;Describe below any additional user acceptance expectations not previously captured in User Stories section above. Descriptions of these expectations shall be clear and distinct, and not convey design.&gt;

| **Expectation ID** | **Description** | **Level of Need <br>**(Low/Med/High) |
| ------------------ | --------------- | ------------------------------------ |
| UAE-001            |                 |                                      |
| UAE-002            |                 |                                      |
| UAE-003            |                 |                                      |

# Reference

## Definitions, Abbreviations & Acronyms

&lt;Any terms, abbreviations or acronyms used in this document should be listed in this section along with their associated explanation.&gt;

| **Term**            | **Explanation** |
| ------------------- | --------------- |
| **&lt;Term #1&gt;** |                 |
| **&lt;Term #2&gt;** |                 |
| **Etc.**            |                 |

## Business Policies & Rules

<A business policy is a plan or course of action intended to influence and determine decisions, actions and other matters. Policies are implemented to avoid some negative effect or to seek some positive benefit.

Business rules are declarations of policies or conditions that must be satisfied and are intended to assert business structure or to control or influence the behavior of the business. They are constraints on a person, business, element of the business, or action performed; they are a type of business requirement.

Below, capture specific references and resulting user stories and/or business requirements (previous sections of this document) that are intended to fulfill the specific references. The business is responsible for providing non-technology policies and rules, while an IT SME is responsible for technology policies and rules – Cybersecurity Guidelines, etc.>

### Business Policies

| **#** | **Business Policy Document**<br><br>(include link) | **Specific Reference(s)**<br><br>(paragraph, section, etc.) | **User Stories/Business Req’s Driven by Specific Reference** |
| ----- | -------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------ |
| 1     |                                                    | a)<br><br>b)                                                | a)<br><br>b)                                                 |
| 2     |                                                    | a)<br><br>b)                                                | a)<br><br>b)                                                 |
| 3     |                                                    | a)<br><br>b)                                                | a)<br><br>b)                                                 |

### Business Rules

| **#** | **Business Rule Document**<br><br>(include link) | **Specific Reference(s)**<br><br>(paragraph, section, etc.) | **User Stories/Business Req’s Sourced from Document Reference** |
| ----- | ------------------------------------------------ | ----------------------------------------------------------- | --------------------------------------------------------------- |
| 1     |                                                  | a)<br><br>b)                                                | a)<br><br>b)                                                    |
| 2     |                                                  | a)<br><br>b)                                                | a)<br><br>b)                                                    |
| 3     |                                                  | a)<br><br>b)                                                | a)<br><br>b)                                                    |

## Other References

&lt;This section lists the documents and reference material used in the development of this document or referenced in the document. The referenced documents should include all project documentation preceding this deliverable (e.g., Statement of Work (SOW), Gap Analysis Report, and trade studies, etc.) The dates, version numbers and locations of these documents should be provided.&gt;

&lt;Other Reference #1&gt;

&lt;Other Reference #2&gt;

&lt;Etc.&gt;

# Approvals

<This section contains the signatures of the approvers of this document. By signing, they are accepting the validity and accuracy of the information contained in the document. Additionally, they are accepting the requirements contained within the document as the basis for system requirements definition and analysis.

Acceptance also indicates that all signing parties agree that the documented requirements will be used as one of the project’s criteria for measurable success.

The approvers of the requirements must include all stakeholders including Business Process Owner(s), IT Project Manager/Solution Delivery Manager, Solution Delivery Senior Manager, and other applicable managers. For example, if there is a requirement to modify an existing system interface the managers of both interfacing systems must approve these requirements. If the specification contains constraints that potentially will have an impact on the information technology infrastructure, then the requirements must also be approved by a representative from IT Infrastructure.

The document will also be signed by the business analysts who prepared the document. Their signature implies that the document is ready for approval.>

Approvals

This section captures names of those selected to approve the content of this document. By approving via logged communication (email, chat, e-signature, etc.), Approvers are confirming the validity and accuracy of the information contained in the document. Additionally, Approvers are confirming the information/data/concepts contained within the document are the complete and accurate documentation of all business requirements/expectations.

**_Note:_** _Business requirements describe why the business is undertaking the effort and what the users of the solution do with the solution._

**OU Representative** – _Insert Name Here –_ (_Insert Date of Approval Here_)

**OU Representative** – _Insert Name Here –_ (_Insert Date of Approval Here_)

**OU Representative** – _Insert Name Here –_ (_Insert Date of Approval Here_)

**Business Process Owner** – _Insert Name Here or N/A –_ (_Insert Date of Approval Here_)

**Business Product Owner** – _Insert Name Here –_ (_Insert Date of Approval Here_)

**IT Delivery/Product Manager** – _Insert Name Here or N/A –_ (_Insert Date of Approval Here_)

**Project/System Architect Name** – _Insert Name Here_ (_Insert Date of Approval Here_)
